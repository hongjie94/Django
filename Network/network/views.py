from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from .models import User, Post, Like, Follow
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json


def index(request):

    posts = Post.objects.all().order_by('-time_posted')

    for post in posts:
        post.likes = Like.objects.filter(post=post.id).count()
        post.save()

    post_paginator = Paginator(posts, 10)

    page_num = request.GET.get('page')

    page = post_paginator.get_page(page_num)

    return render(request, "network/index.html", {"page": page})


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "network/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "network/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "network/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "network/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "network/register.html")


# User able to add new post
@login_required(login_url='/login')
def add_post(request):

    # If request method is post
    if request.method == "POST":
        # Get user name
        user = request.user
        # Ger user post content
        content = request.POST["content"]

        # Create new post
        post = Post.objects.create(
            user=user,
            content=content
        )
        post.save()

        # Sort post by chronological order.
        posts = Post.objects.all().order_by('-time_posted')

        # Django Paginator show only 10 post in each page
        post_paginator = Paginator(posts, 10)

        page_num = request.GET.get('page')

        page = post_paginator.get_page(page_num)

        # Show all posts in all_post page
        return render(request, "network/all_post.html", {
            "page": page,
            "message": "You have add a new post!"
            })
    else:
        return render(request, "network/add_post.html")


# View all post
def all_post(request):

    # Get all exist posts.
    posts = Post.objects.all().order_by('-time_posted')

    for post in posts:
        post.likes = Like.objects.filter(post=post.id).count()
        post.save()

    # Django Paginator, show only 10 post in each page
    post_paginator = Paginator(posts, 10)

    page_num = request.GET.get('page')

    page = post_paginator.get_page(page_num)

    # Show all posts in all_post page
    return render(request, "network/all_post.html", {
        "page": page,

     })


# profile page where user able to view detail for a user and able to follow / unfollow a user
@login_required(login_url='/login')
def profile(request, publisher):

    # Get the username of post owner
    publisher = User.objects.get(id=publisher)

    # Set submit button to follow if there is no follower set it to unfollow
    submit_b = "Follow" if Follow.objects.filter(follower=request.user, following=publisher).count() == 0 else "Unfollow"

    # If request method is post
    if request.method == "POST":

        # If value of submit button is Follow
        if request.POST["submit_b"] == "Follow":

            # Set submit_b to Unfollow
            submit_b = "Unfollow"

            # Create new follow object
            Follow.objects.create(follower=request.user, following=publisher)

        else:
            # Set submit_b to Follow
            submit_b = "Follow"

            # Delete exist follow object
            Follow.objects.filter(follower=request.user, following=publisher).delete()

    # Get current user's post sort by chronological order
    posts = Post.objects.filter(user=publisher).order_by('-time_posted')

    for post in posts:
        post.likes = Like.objects.filter(post=post.id).count()
        post.save()

    # Django Paginator, load 10 post each page
    post_paginator = Paginator(posts, 10)

    page_num = request.GET.get('page')

    page = post_paginator.get_page(page_num)

    followers = Follow.objects.filter(following=publisher)
    following = Follow.objects.filter(follower=publisher)

    # Show publisher's posts and profile
    return render(request, "network/profile.html", {
        "page": page,
        "user": request.user,
        "publisher": publisher,
        "submit_b": submit_b,
        "followers": followers.count(),
        "following": following.count(),
        "counts": post_paginator.count,
    })


# User's profile page
def personal(request):

    # If method is get
    if request.method == "GET":

        # Get user's username
        user = request.user

        # Get all user's posts sort by chronological order.
        posts = Post.objects.filter(user=user).order_by('-time_posted')

        for post in posts:
            post.likes = Like.objects.filter(post=post.id).count()
            post.save()

        # Django Paginator, show 10 posts on each page
        post_paginator = Paginator(posts, 10)

        page_num = request.GET.get('page')

        page = post_paginator.get_page(page_num)

        followers = Follow.objects.filter(following=user)
        following =Follow.objects.filter(follower=user)

        # Show personal's posts and profile
        return render(request, "network/personal.html", {
            "page": page,
            "counts": post_paginator.count,
            "followers": followers.count(),
            "following": following.count()
        })
    else:
        return redirect('personal')


# User's following view page
def following_view(request):

    # Get all the following users
    following = Follow.objects.filter(follower=request.user).values('following_id')

    # Get all following user's posts
    posts = Post.objects.filter(user__in=following)

    # Django paginator, load 10 post per page
    paginator = Paginator(posts, 10)
    page_number = request.GET.get('page')
    page = paginator.get_page(page_number)

    # Show all request post
    return render(request, "network/following.html", {
        "page": page,
    })


# User able to edit their own post
@login_required(login_url='/login')
@csrf_exempt
def edit(request, post_id):

    # Get all post by post id
    post = Post.objects.get(id=post_id)

    # Send a PUT request
    if request.method == "PUT":

        # Update post content
        data = json.loads(request.body)
        if data.get("post") is not None:
            post.content = data["post"]
            post.save()
        return HttpResponse(status=204)


# User able to like / unlike posts
@login_required(login_url='/login')
@csrf_exempt
def like(request, post_id):

    # Get request post by current post id
    post = Post.objects.get(id=post_id)

    # If method is get
    if request.method == "GET":
        return JsonResponse(post.serialize())

    # When user like a post
    if request.method == "PUT":

        # Load Json
        data = json.loads(request.body)
        # If like is true
        if data.get("like"):

            # Get the like model where user is request user and post is current post
            Like.objects.create(user=request.user, post=post)

            # Update number of like from post model where the post is current post
            post.number_likes = Like.objects.filter(post=post).count()

            post.save()

        # If like is false or unlike
        else:

            # Delete from like model where user is request user and post is current post
            Like.objects.filter(user=request.user, post=post).delete()

            # Update number of like and save it to post model
            post.number_likes = Like.objects.filter(post=post).count()

            post.save()

        return HttpResponse(status=204)
