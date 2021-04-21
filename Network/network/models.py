from django.contrib.auth.models import AbstractUser
from django.db import models


# User DB
class User(AbstractUser):
    pass


# Model for Post
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")
    content = models.CharField(max_length=300)
    time_posted = models.DateTimeField(auto_now_add=True)
    number_likes = models.IntegerField(default=0)

    def serialize(self):
        return {
            "number_likes": self.number_likes
        }


# Add later
# class Comment(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comment_user")
#     user_comment = models.CharField(max_length=300)
#     time_commented = models.DateTimeField(auto_now_add=True)

# Model for Like/unlike
class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="liked_user")
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="liked_post")


# Model for Fallowing/follower
class Follow(models.Model):
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name="follower")
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")




