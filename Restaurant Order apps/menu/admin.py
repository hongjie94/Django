from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(Item)
admin.site.register(Order)
admin.site.register(Cart)
admin.site.register(Check)

