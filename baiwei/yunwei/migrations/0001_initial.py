# -*- coding: utf-8 -*-
# Generated by Django 1.9.13 on 2017-04-15 17:30
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=1000)),
                ('picture', models.ImageField(upload_to='yunwei/templates/adminlte/dist/img')),
            ],
            options={
                'db_table': 'Profile',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='XLS',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nowtime', models.DateTimeField(auto_now_add=True)),
                ('username', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=1000)),
                ('content', models.TextField(default='')),
            ],
        ),
    ]
