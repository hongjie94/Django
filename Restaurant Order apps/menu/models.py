from decimal import Decimal
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Item(models.Model):
    category = models.CharField(max_length=16)
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=64, blank=True, null=True)
    item_num = models.CharField(max_length=64)
    pt_price = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)
    qt_price = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)
    price = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    spicy = models.BooleanField(default=False)

    def serialize(self):
        return {
            "category": self.category,
            "name": self.name,
            "description": self.description,
            "item_num": self.item_num,
            "pt_price": self.pt_price,
            "qt_price": self.qt_price,
            "price": self.price,
            "spicy": self.spicy
        }


class Cart(models.Model):
    user = models.CharField(max_length=64)
    item_name = models.CharField(max_length=64, null=True)
    item_size = models.CharField(max_length=64, blank=True, null=True)
    quantity = models.IntegerField(default=0, null=True)
    total = models.DecimalField(default=0, max_digits=6, decimal_places=2)
    cart_num = models.IntegerField(default=0)
    cart_status = models.IntegerField(null=True, default=0)
    owner = models.IntegerField(null=True)

    def serialize(self):
        return {
            "user": self.user,
            "item_name": self.item_name,
            "item_size": self.item_size,
            "quantity": self.quantity,
            "total": self.total,
            "owner": self.owner
        }


class Check(models.Model):
    user = models.CharField(max_length=64)
    tax = models.DecimalField(default=0, max_digits=10, decimal_places=2)
    sub_total = models.DecimalField(default=0, max_digits=10, decimal_places=2)
    final_total = models.DecimalField(default=0, max_digits=10, decimal_places=2)

    def serialize(self):
        return {
            "user": self.user,
            "tax": self.tax,
            "sub_total": self.sub_total,
            "final_total": self.final_total
        }


class Order(models.Model):
    user = models.CharField(max_length=64)
    order_num = models.IntegerField(primary_key=True)
    order_item = models.CharField(max_length=255)
    order_quantity = models.CharField(max_length=64)
    order_total = models.DecimalField(max_digits=8, decimal_places=2)
    order_tax = models.DecimalField(max_digits=8, decimal_places=2)
    order_sub = models.DecimalField(max_digits=8, decimal_places=2)
    order_time = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=64, default="0")

    def serialize(self):
        return {
            "user": self.user,
            "order_num": self.order_num,
            "order_item": self.order_item,
            "order_quantity": self.order_quantity,
            "order_tax": self.order_tax,
            "order_sub": self.order_sub,
            "order_total": self.order_total,
            "order_time": self.order_time,
            "status": self.status
        }
