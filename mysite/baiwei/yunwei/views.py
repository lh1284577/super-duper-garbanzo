#coding=utf-8
from django.shortcuts import render
from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from django.template import RequestContext
from django.contrib import auth
import yunwei.auth
from django import forms
import datetime,time
import MySQLdb
from django.contrib.auth.models import User
from yunwei.models import Profile
import json
from yunwei.models import BLOG

from yunwei.serializers import BLOGSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view

class BLOGViewSet(viewsets.ModelViewSet):
    	queryset = BLOG.objects.all()
    	serializer_class = BLOGSerializer
    	permission_classes = (IsAuthenticated,)


class ProfileForm(forms.Form):
   Picture = forms.ImageField()

class UserForm(forms.Form):
    username = forms.CharField(
        required=True,
        label=u"用户名",
        error_messages={'required': '请输入用户名'},
        widget=forms.TextInput(
            attrs={
                'placeholder':u"用户名",
            }
        ),
    )
    password = forms.CharField(
        required=True,
        label=u"密码",
        error_messages={'required': u'请输入密码'},
        widget=forms.PasswordInput(
            attrs={
                'placeholder':u"密码",
            }
        ),
    )
    email = forms.EmailField(required=False)


def touxiang(req):
        req.session.set_expiry(0)
        try:
                username = req.session['username']
        except:
                username = 'lihao'
        picture = Profile.objects.filter(name=username).values('picture')
        timestring = time.strftime("%m/%d/%Y",time.localtime())
        timestring = "%s - %s" % (timestring,timestring)

       # conn = MySQLdb.connect( host='localhost',user='root', db='yunwei', passwd='root',charset='utf8')
       # cur = conn.cursor()
       # cur.execute("select username from auth_user")
        SUMER=""
       # for summer in [ line[0] for line in cur.fetchall() ]:
       #                 try:
       #                         data = Profile.objects.filter(name=summer).values('picture')[0]['picture']
       #                         SUMER = SUMER + "<li><a href='#'><div class='pull-left'><img src="+data+" class='img-circle' alt='user image'></div><h4 >"+summer+"<small id="+summer+" class='label pull-right bg-red'>offline</small></h4></a></li>"
       #                 except:
       #                         SUMER = SUMER + "<li><a href='#'><div class='pull-left'><img src="+"./dist/img/null.png"+" class='img-circle' alt='user image'></div><h4>"+summer+"<small id="+summer+" class='label pull-right bg-red'>offline</small></h4></a></li>"
        SUMERCOUNT = Profile.objects.all().count()
        return {'picture':picture,'SUMER':SUMER,'SUMERCOUNT':SUMERCOUNT}


#个人信息页面
@yunwei.auth.login_check()
def profile(req):
        username = req.session['username']
        return render_to_response('adminlte/profile.html',{'username':username},context_instance=RequestContext(req,processors=[touxiang]))

#上传个人头像和修改个人信息
def profileset(req):
   username = req.session['username']
   if req.method == "POST":

      email = req.POST.get('email')
      password = req.POST.get('password')
      if email and password != '':
        user = User.objects.get(username=username)
        user.email = email
        user.set_password(password)
        user.save()

      form = ProfileForm(req.POST,req.FILES)
      if form.is_valid():
         del_id = Profile.objects.filter(name=username)
         if del_id:
                del_id.delete()
         profile = Profile()
         profile.name = username
         profile.picture = form.cleaned_data["Picture"]
         profile.save()

   return HttpResponseRedirect('/yunwei')

#访问静态文件
def charts(req,id):
        try:
                username = req.session['username']
                STATUS=req.GET["STATUS"]
        except:
                 return render_to_response('adminlte/_%s.html' % id,context_instance=RequestContext(req,processors=[touxiang]))
        return render_to_response('adminlte/_%s.html' % id,{'username':username,'STATUS':STATUS},context_instance=RequestContext(req,processors=[touxiang]))

@yunwei.auth.login_check()
def index(req,url=None):
	LIST = BLOG.objects.order_by('-id')[0:10]
        username = req.session['username']
        sessionID = req.session.session_key
        if url is None:
                return render(req,'adminlte/index.html',{'username':username,'LIST':LIST},context_instance=RequestContext(req,processors=[touxiang]))
        else:
                return render(req,url,{'username':username,'LIST':LIST})


def regist(req):
    if req.method == 'POST':
        uf = UserForm(req.POST)

        if uf.is_valid():
            #获得表单数据
            username = uf.cleaned_data['username']
            password = uf.cleaned_data['password']
            email = uf.cleaned_data['email']
            #添加到数据库
            user = auth.authenticate(username=username,password=password)
            if user is not None:
                return render_to_response('adminlte/register.html',{'uf':uf}, context_instance=RequestContext(req))
            else:
                if req.POST.get('jihuoma') == 'lihao':
                        User.objects.create_user(username=username,password=password,email=email)
                        return HttpResponseRedirect('/yunwei/login')
                else:
                        Error='激活码错误'
                        return render_to_response('adminlte/register.html',{'uf':uf,'Error':Error}, context_instance=RequestContext(req))
    else:
        uf = UserForm()
    return render_to_response('adminlte/register.html',{'uf':uf}, context_instance=RequestContext(req))


def logout_view(req):
    auth.logout(req)
    return HttpResponseRedirect('/yunwei/login')


def login(req):
    password_is_wrong=''
    if req.method == 'POST':
        uf = UserForm(req.POST)

        if uf.is_valid():  #是否有效
                try:
                    username = uf.cleaned_data['username']
                    password = uf.cleaned_data['password']
                    User = auth.authenticate(username=username,password=password)
                    if User.is_authenticated():
			req.session['username'] = username
                        return HttpResponseRedirect('/yunwei/')
                except:
                        password_is_wrong = '用户名或密码错误'
                        return render_to_response('adminlte/login.html',{'uf':uf,'password_is_wrong':password_is_wrong},context_instance=RequestContext(req))
    else:
        uf = UserForm()
    return render_to_response('adminlte/login.html',{'uf':uf,'password_is_wrong':password_is_wrong},context_instance=RequestContext(req))
