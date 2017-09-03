#coding=utf-8
from __future__ import unicode_literals

from django.db import models

import datetime
from django.contrib.auth.models import User
from django import forms

class User(models.Model):
    user = models.OneToOneField(User)

class Profile(models.Model):
   name = models.CharField(max_length = 1000)
   picture = models.ImageField(upload_to = os.getcwd() + '/dist/img')


class BLOG(models.Model):
    nowtime = models.DateTimeField(auto_now_add=True)
    username = models.CharField(max_length=50)
    title = models.CharField(max_length=1000)
    content = models.TextField()

class MESSAGE(models.Model):
    nowtime = models.DateTimeField(auto_now_add=True)
    blogid = models.BigIntegerField()
    username = models.CharField(max_length=50)
    content = models.TextField()

def __unicode__(self):
    return self.username

