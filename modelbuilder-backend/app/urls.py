from django.urls import path
from .views import index, user_login, user_signup

# from .views import test
urlpatterns = [
    path("", index, name="index"),
    path("login", user_login, name="login"),
    path("signup", user_signup, name="signup"),
    # path("test/", test, name="test")
]