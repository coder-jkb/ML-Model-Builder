from django import forms

class LoginForm(forms.Form):
    login_email = forms.EmailField(max_length=100)
    login_password = forms.CharField(widget=forms.PasswordInput())

class SignupForm(forms.Form):
    firstname = forms.CharField(max_length=150)
    lastname = forms.CharField(max_length=150)
    signup_email = forms.EmailField(max_length=100)
    signup_password = forms.CharField(widget=forms.PasswordInput())
    confirm_password = forms.CharField(widget=forms.PasswordInput())