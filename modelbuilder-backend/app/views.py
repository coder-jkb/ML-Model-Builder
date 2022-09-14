from django.shortcuts import render
from django.http import HttpResponse
from django_nextjs.render import render_nextjs_page_sync

def index(request):
    return render_nextjs_page_sync(request)

def test(request):
    return HttpResponse("<h1>test</h1>")