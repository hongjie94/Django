from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("add_post", views.add_post, name="add_post"),
    path("all_post", views.all_post, name="all_post"),
    path("profile/<int:publisher>", views.profile, name="profile"),
    path("personal", views.personal, name="personal"),
    path("following_view", views.following_view, name="following_view"),
    
    # API Routes
    path("edit/<int:post_id>", views.edit, name="edit"),
    path("like/<int:post_id>", views.like, name="like")
]

