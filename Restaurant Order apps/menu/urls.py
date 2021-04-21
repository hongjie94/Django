from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("menu", views.menu, name="menu"),
    path("order_detail<int:order_num>", views.order_detail, name="order_detail"),
    path("owner_detail<int:order_num>", views.owner_detail, name="owner_detail"),
    path("cooking_detail<int:order_num>", views.cooking_detail, name="cooking_detail"),

    # API Routes
    path("addCart", views.addCart, name="addCart"),
    path("addTotal", views.addTotal, name="addTotal"),
    path("deleteCart/<int:cart_id>", views.deleteCart, name="deleteCart"),
    path("cart/<str:username>", views.cart, name="cart"),
    path("check/<str:username>", views.check, name="check"),
    path("order/<int:item_id>", views.order, name="order"),
    path("orderview", views.orderview, name="orderview"),
    path("placeorder", views.placeorder, name="placeorder"),
    path("history", views.history, name="history"),
    path("cooking_detail<int:order_num>", views.cooking_detail, name="cooking_detail"),
    path("status/<int:order_num>", views.status, name="status"),
    path("preparing", views.preparing, name="preparing"),
    path("cancel", views.cancel, name="cancel"),
    path("complete", views.complete, name="complete"),
    path("owner", views.owner, name="owner")
]
