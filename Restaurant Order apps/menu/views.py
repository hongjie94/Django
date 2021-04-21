from django.db.models.fields import json
from .models import *
import json
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt


def index(request):
    carts = Cart.objects.filter(user=request.user.username, owner=0,)
    if request.user.username == "owner":
        orders = Order.objects.filter(status="Processing")
        for order in orders:
            order_num = order.order_num
            carts = Cart.objects.filter(
                owner=1, cart_status=1, cart_num=order_num)

        return render(request, "menu/owner.html", {
            "orders": orders,
            "carts": carts
        })

    return render(request, "menu/index.html", {"carts": carts})


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user.username != "owner" and user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("menu"))
        elif user.username == "owner":
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "menu/login.html", {
                "message": "Invalid username and/or password."
            })

    else:
        return render(request, "menu/login.html")


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
            return render(request, "menu/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
            Check.objects.create(user=username)
        except IntegrityError:
            return render(request, "menu/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "menu/register.html")


def menu(request):
    items = Item.objects.all()
    appetizers = Item.objects.filter(category="Appetizers")
    soups = Item.objects.filter(category="Soups")
    c_ms = Item.objects.filter(category="Chow Mein")
    c_ss = Item.objects.filter(category="Chop Suey")
    f_rs = Item.objects.filter(category="Fried Rice")
    l_ms = Item.objects.filter(category="Lo Mein")
    beefs = Item.objects.filter(category="Beef")
    porks = Item.objects.filter(category="Pork")
    chickens = Item.objects.filter(category="Chicken")
    seafoods = Item.objects.filter(category="Seafood")
    snss = Item.objects.filter(category="Sweet & Sour")
    vegs = Item.objects.filter(category="Vegetable Dishes")
    cfs = Item.objects.filter(category="Chow Fun or Rice Noodles")
    cantos = Item.objects.filter(category="Cantonese Dishes")
    hunans = Item.objects.filter(category="Hunan Dishes")
    efys = Item.objects.filter(category="Egg Foo Young")
    sugs = Item.objects.filter(category="Suggestions")
    combos = Item.objects.filter(category="Combination Plates")
    sides = Item.objects.filter(category="Side Order")
    carts = Cart.objects.filter(user=request.user.username, owner=0)
    requester = request.user.username

    if requester == "":
        check = Check.objects.get(user="demo")
    else:
        check = Check.objects.get(user=request.user.username)

    return render(request, "menu/menu.html", {
        "appetizers": appetizers,
        "soups": soups,
        "c_ms": c_ms,
        "c_ss": c_ss,
        "f_rs": f_rs,
        "l_ms": l_ms,
        "beefs": beefs,
        "porks": porks,
        "chickens": chickens,
        "seafoods": seafoods,
        "snss": snss,
        "vegs": vegs,
        "cfs": cfs,
        "cantos": cantos,
        "hunans": hunans,
        "efys": efys,
        "sugs": sugs,
        "combos": combos,
        "sides": sides,
        "items": items,
        "carts": carts,
        "check": check
    })

# User able to add item to their order


@csrf_exempt
@login_required
def order(request, item_id):
    # Get request item by items id
    item = Item.objects.get(id=item_id)

    if request.method == "GET":
        return JsonResponse(item.serialize())

    return HttpResponse(status=200)


@csrf_exempt
@login_required
def check(request, username):
    # Get request item by items id
    check = Check.objects.get(user=username)

    if request.method == "GET":
        return JsonResponse(check.serialize())

    return HttpResponse(status=200)


@login_required
@csrf_exempt
def cart(request, username):
    if request.method == "GET":
        carts = Cart.objects.filter(user=username, owner=0)

    return JsonResponse([cart.serialize() for cart in carts], safe=False)


@login_required
@csrf_exempt
def addCart(request):
    if request.method == "POST":
        username = request.user.username
        data = json.loads(request.body)
        item_name = data.get("item_name", "")
        item_size = data.get("item_size", "")
        item_quantity = data.get("quantity", "")
        item_total = data.get("total", "")
        try:
            carts = Cart.objects.filter(
                user=username, item_name=item_name, item_size=item_size)
            for cart in carts:
                db_total = float(cart.total)

                db_quantity = int(cart.quantity)

                new_total = float((db_total + float(item_total)))

                new_quantity = int(db_quantity + int(item_quantity))

                print("db_total", db_total)
                print("db_quantity", db_quantity)
                print("new_total", new_total)
                print("new_quantity", new_quantity)

                Cart.objects.filter(user=username,
                                    item_name=item_name,
                                    item_size=item_size, owner=0).delete()

                Cart.objects.filter(user=username,
                                    item_name=item_name,
                                    item_size=item_size, owner=1).delete()

                Cart.objects.create(user=username,
                                    item_name=item_name,
                                    item_size=item_size,
                                    quantity=new_quantity,
                                    total=new_total,
                                    owner=1)

                Cart.objects.create(user=username,
                                    item_name=item_name,
                                    item_size=item_size,
                                    quantity=new_quantity,
                                    total=new_total,
                                    owner=0)

                return JsonResponse({}, status=201)
        except:
            return JsonResponse({}, status=404)

    username = request.user.username
    data = json.loads(request.body)
    item_name = data.get("item_name", "")
    item_size = data.get("item_size", "")
    item_quantity = data.get("quantity", "")
    item_total = data.get("total", "")

    Cart.objects.create(user=username,
                        item_name=item_name,
                        item_size=item_size,
                        quantity=item_quantity,
                        total=item_total,
                        owner=1)

    Cart.objects.create(user=username,
                        item_name=item_name,
                        item_size=item_size,
                        quantity=item_quantity,
                        total=item_total,
                        owner=0)

    print("item_name", item_name)
    print("item_size", item_size)
    print("item_quantity", item_quantity)
    print("item_total", item_total)

    return JsonResponse({}, status=201)


@login_required
@csrf_exempt
def deleteCart(request, cart_id):
    if request.method == "GET":
        carts = Cart.objects.get(pk=cart_id)
        return JsonResponse([carts.serialize()], safe=False)

    if request.method == "POST":
        db_carts = Cart.objects.filter(user=request.user.username, id=cart_id)
        for db_cart in db_carts:
            preSub = float(db_cart.total)
            preTax = float(preSub * 0.08)
            PreFt = float(preTax + preSub)
            print("preSub", preSub)
            print("preTax", preTax)
            print("PreFt", PreFt)

            db_check = Check.objects.get(user=request.user.username)

            # print("db_check.sub_total", db_check.sub_total)
            # print("db_check.tax", db_check.tax)
            # print("db_check.final_total", db_check.final_total)

            newSub = float(float(db_check.sub_total) - preSub)
            newTax = float(float(db_check.tax) - preTax)
            newFt = float(float(db_check.final_total) - PreFt)

            # print("newSub", newSub)
            # print("newTax", newTax)
            # print("newFt", newFt)

            Check.objects.get(user=request.user.username).delete()

            Check.objects.create(user=request.user.username,
                                 sub_total=newSub,
                                 tax=newTax,
                                 final_total=newFt)

            data = json.loads(request.body)
            cartId = data.get("cartId", "")
            Cart.objects.filter(user=request.user.username, id=cartId).delete()

            Cart.objects.filter(user=request.user.username,
                                item_name=db_cart.item_name, item_size=db_carts.item_size,
                                quantity=db_carts.quantity, total=db_carts.total, owner=1).delete()

            return JsonResponse({}, status=200)
    return JsonResponse({}, status=400)


@login_required
@csrf_exempt
def addTotal(request):
    if request.method == "POST":
        username = request.user.username
        data = json.loads(request.body)
        tax = data.get("tax", "")
        sub_total = data.get("sub_total", "")
        final_total = data.get("final_total", "")
        try:
            db_tax = float(tax)
            db_sub = float(sub_total)
            db_ftotal = float(final_total)

            # print("db_tax", db_tax)
            # print("db_sub", db_sub)
            # print("db_ftotal", db_ftotal)

            Check.objects.filter(user=username).delete()
            Check.objects.create(user=username,
                                 tax=db_tax,
                                 sub_total=db_sub,
                                 final_total=db_ftotal)

            return JsonResponse({}, status=201)
        except:
            return JsonResponse({}, status=404)

    username = request.user.username
    data = json.loads(request.body)
    tax = data.get("tax", "")
    sub_total = data.get("sub_total", "")
    final_total = data.get("final_total", "")
    Check.objects.create(user=username,
                         tax=tax,
                         sub_total=sub_total,
                         final_total=final_total)
    # print("tax", tax)
    # print("sub_total", sub_total)
    # print("final_total", final_total)

    return JsonResponse({}, status=201)


@login_required
@csrf_exempt
def placeorder(request):
    if request.method == "POST":
        username = request.user.username
        gust_check = Check.objects.get(user=username)
        cart = Cart.objects.filter(user=username)
        order_item = []
        order_quantity = []

        for carts in cart:
            item_name = carts.item_name
            quantity = carts.quantity
            order_item.append(item_name)
            order_quantity.append(quantity)

            # print("order_item", item_name)
            # print("order_quantity", quantity)
            # print("gust_check", gust_check.final_total)
            #
            # print("order_item", order_item)
            # print("order_quantity", order_quantity)
            # print("gust_check", gust_check.final_total)

        Order.objects.create(user=username,
                             order_item=order_item,
                             order_quantity=order_quantity,
                             order_tax=gust_check.tax,
                             order_sub=gust_check.sub_total,
                             order_total=gust_check.final_total,
                             status="Processing")

        Check.objects.filter(user=username).delete()
        Check.objects.create(user=username,
                             tax=0,
                             sub_total=0,
                             final_total=0)

        db_order = Order.objects.filter(user=username,
                                        order_item=order_item,
                                        order_quantity=order_quantity,
                                        order_tax=gust_check.tax,
                                        order_sub=gust_check.sub_total,
                                        order_total=gust_check.final_total)

        for cur_order in db_order:
            cur_order_num = cur_order.order_num
            print("order_num", cur_order_num)
            Cart.objects.filter(user=username, owner=1, cart_num=0).update(
                cart_status=1, cart_num=cur_order_num)
        Cart.objects.filter(user=username, owner=0, cart_status=0).delete()

        return JsonResponse({}, status=201)
    return JsonResponse({}, status=403)


@csrf_exempt
@login_required
def orderview(request):
    orders = Order.objects.filter(
        user=request.user.username).order_by("-order_time").all()
    checks = Check.objects.filter(user=request.user.username)
    for check in checks:
        check = check

    carts = Cart.objects.filter(user=request.user.username, owner=0)
    return render(request, "menu/orderview.html", {
        "check": check,
        "carts": carts,
        "orders": orders
    })


@csrf_exempt
@login_required
def history(request):
    orders = Order.objects.filter(
        user=request.user.username).order_by("-order_time").all()
    checks = Check.objects.filter(user=request.user.username)
    for check in checks:
        check = check
    carts = Cart.objects.filter(user=request.user.username, owner=0)

    # for cart in range(0, len(carts)):
    #     print(cart[len(carts)])
    #
    #     print("yaaaaaaa",carts[1])
    #
    # for cart in carts:
    #     cart_quantity = cart.quantity
    #     print("#########",cart_quantity)

    return render(request, "menu/history.html", {
        "check": check,
        "carts": carts,
        "orders": orders
    })


@csrf_exempt
@login_required
def owner(request):
    if request.method == "GET":
        orders = Order.objects.filter(status="Processing")
        carts = Cart.objects.filter(
            user=request.user.username, owner=1, cart_status=1)
        # print("order", order)
        # print("carts", carts)
        return render(request, "menu/owner.html", {
            "orders": orders,
            "carts": carts
        })


@login_required
def order_detail(request, order_num):
    if request.method == "GET":
        carts = Cart.objects.filter(user=request.user.username, owner=1, cart_status=1, cart_num=order_num).order_by(
            "-cart_num").all()
        orders = Order.objects.filter(
            user=request.user.username, order_num=order_num)

        return render(request, "menu/order_detail.html", {
            "carts": carts,
            "orders": orders
        })


@login_required
def owner_detail(request, order_num):
    if request.method == "GET":
        carts = Cart.objects.filter(owner=1, cart_status=1, cart_num=order_num).order_by(
            "-cart_num").all()
        orders = Order.objects.filter(order_num=order_num)

        return render(request, "menu/owner_detail.html", {
            "carts": carts,
            "orders": orders
        })


@login_required
def cooking_detail(request, order_num):
    if request.method == "GET":
        carts = Cart.objects.filter(
            owner=1, cart_status=1, cart_num=order_num).order_by("-cart_num").all()
        for cart in carts:
            num = cart.cart_num

        orders = Order.objects.filter(
            user=request.user.username, order_num=order_num)

        return render(request, "menu/cooking_detail.html", {
            "carts": carts,
            "orders": orders,
            "num": num
        })


@csrf_exempt
@login_required
def status(request, order_num):

    orders = Order.objects.get(order_num=order_num)

    if request.method == "GET":
        return JsonResponse([orders.serialize()], safe=False)

    if request.method == "POST":
        data = json.loads(request.body)
        status = data.get("status", "")

        print("status:", status)

        orders.status = status

        orders.save()

        return JsonResponse({}, status=201)
    return JsonResponse({}, status=200)


@csrf_exempt
@login_required
def cancel(request):
    if request.method == "GET":
        orders = Order.objects.filter(status="Order Canceled").order_by("-order_time").all()
        carts = Cart.objects.filter(
            user=request.user.username, owner=1, cart_status=1)
        # print("order", order)
        # print("carts", carts)
        return render(request, "menu/cancel.html", {
            "orders": orders,
            "carts": carts
        })


@csrf_exempt
@login_required
def preparing(request):
    if request.method == "GET":
        orders = Order.objects.filter(status="Preparing").order_by("-order_time").all()
        carts = Cart.objects.filter(
            user=request.user.username, owner=1, cart_status=1)
        # print("order", order)
        # print("carts", carts)
        return render(request, "menu/preparing.html", {
            "orders": orders,
            "carts": carts
        })


@csrf_exempt
@login_required
def complete(request):
    if request.method == "GET":
        orders = Order.objects.filter(status="Order Ready").order_by("-order_time").all()
        carts = Cart.objects.filter(
            user=request.user.username, owner=1, cart_status=1)
        # print("order", order)
        # print("carts", carts)
        return render(request, "menu/complete.html", {
            "orders": orders,
            "carts": carts
        })



