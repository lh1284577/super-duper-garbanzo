# -*- coding: utf-8 -*-
# Generated by Django 1.9.13 on 2017-05-23 06:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yunwei', '0002_auto_20170415_1731'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='picture',
            field=models.ImageField(upload_to='./dist/img'),
        ),
    ]