from django.urls import path
from game.views import index,hello
urlpatterns = [
    path("",index, name ="index"),
    path("hello/",hello ,name="hello")

    ]
