# Generated by Django 3.1.2 on 2020-10-21 03:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0002_listing_current_bid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='current_bid',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
    ]