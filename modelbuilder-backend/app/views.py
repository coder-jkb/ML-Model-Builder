import random
# from django.shortcuts import render
from django.http import HttpResponse
from django_nextjs.render import render_nextjs_page_sync
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .forms import LoginForm, SignupForm

from django.views.decorators.csrf import csrf_exempt

def index(request):
    return render_nextjs_page_sync(request)

@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            credentials = form.cleaned_data
            login_email = credentials['login_email']
            login_password = credentials['login_password']

            # get username from email
            exists = User.objects.filter(email=login_email).exists()
            if exists:
                username = User.objects.get(email=login_email).username
            else:
                # messages.add_message(request, DANGER, 'User doesnot exist! Please signup first', extra_tags='danger')
                # display error
                # return render_nextjs_page_sync(request)
                return HttpResponse("<h1>User doesnot exist!</h1>")

            username = User.objects.get(email=login_email).username
            user = authenticate(username=username, password=login_email)

            '''
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponse("<h1>Successfully logged in!</h1>")
                    # return render_nextjs_page_sync(request) 
            '''

            if user is not None:
                login(request, user)
                return HttpResponse("<h1>Successfully logged in!</h1>")
                # return render_nextjs_page_sync(request) 
            else:
                return HttpResponse("<h1>Invalid email id or password!</h1>")

    else:
        return HttpResponse("<h1>Error 404 - Page not found</h1>")

@csrf_exempt
def user_signup(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            credentials = form.cleaned_data
            firstname = credentials['firstname']
            lastname = credentials['lastname']
            signup_email = credentials['signup_email']
            signup_password = credentials['signup_password']
            confirm_password = credentials['confirm_password']

            if signup_password != confirm_password:
                return HttpResponse("<h1>Confirm password must be same as first one</h1>")

            # generate username
            while True:
                temp_uname = firstname[0]+lastname[0]+str(random.randint(100,999))
                exists = User.objects.filter(username=temp_uname).exists()
                if not exists:
                    username = temp_uname
                    break

            # Save user's credentials in DB
            newuser = User.objects.create_user(username, signup_email, signup_password)
            newuser.first_name = firstname
            newuser.last_name = lastname
            newuser.save()
            return HttpResponse(f"<h1>Hi {firstname}!  Successfully created your account!</h1>")
            


    else:
        return HttpResponse("<h1>Error 404 - Page not found</h1>")




# def test(request):
#     return HttpResponse("<h1>test</h1>")