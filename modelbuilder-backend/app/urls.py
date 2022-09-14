from django.urls import path, include
from .views import index, test
urlpatterns = [
    path("", index, name="index"),
    path("test/", test, name="test")
]