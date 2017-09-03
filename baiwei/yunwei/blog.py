#coding=utf-8
from django.shortcuts import render
from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from django.template import RequestContext
from django.contrib.auth import authenticate,login,logout
import yunwei.auth
from django import forms
import datetime,time
import MySQLdb
from django.contrib.auth.models import User
from yunwei.models import Profile
from yunwei.models import BLOG
from yunwei.models import MESSAGE
import json
from views import touxiang
from views import UserForm
from django.db.models import Q


from django.views.generic.edit import CreateView
from django.views.generic import TemplateView
from django.views.generic import View



@yunwei.auth.login_check()
def blog(req):
   username = req.session['username']
   LIST = BLOG.objects.order_by('-id').all()
   TOUXIANG = Profile.objects.all()
   message_list = MESSAGE.objects.order_by('-blogid').all()
   id_list = BLOG.objects.all().values('id').order_by('-id')
   list = []
   COUNT = {}
   for i in id_list:
       list.append(i['id'])
   for i in list:
       COUNT[i]=(MESSAGE.objects.filter(blogid=i).count())

   return render_to_response('adminlte/blog.html',{'username':username,'LIST':LIST,'message_list':message_list,'COUNT':COUNT,'TOUXIANG':TOUXIANG,'CONTENT':'hide'},context_instance=RequestContext(req,processors=[touxiang]))


class BlogAddView(TemplateView):
 
    template_name = 'adminlte/xheditor-1.2.2/add_blog.html'
    model = BLOG
    def get(self, req, *args, **kwargs):
        context = self.get_context_data(**kwargs)                                                                                                        
        username = req.session['username']
        context['username'] = username
        return self.render_to_response(context)

    def get_context_data(self, **kwargs):
    	context = super(BlogAddView, self).get_context_data(**kwargs)
    	return context



@yunwei.auth.login_check()
def addblog(req):
    username = req.session['username']
    if req.GET:
	return HttpResponseRedirect('/yunwei/blog')
    return render_to_response('adminlte/xheditor-1.2.2/add_blog.html',{'username':username},context_instance=RequestContext(req,processors=[touxiang]))

def add(req):
    username = req.session['username']
    uf = UserForm(req.GET)
    content = req.POST.get('preview')
    title = req.POST.get('title')
    new = BLOG(username=username,title=title,content=content)
    new.save()
    return HttpResponseRedirect('/yunwei/blog')

def edit(req):
    username = req.session['username']
    id = BLOG.objects.get(id=req.GET['id'])
    id.delete()
    content = req.POST.get('preview')
    title = req.POST.get('title')
    new = BLOG(username=username,title=title,content=content)
    new.save()
    newid = BLOG.objects.latest('id').id
    message = MESSAGE.objects.filter(blogid=req.GET['id']).update(blogid=newid)
    return HttpResponseRedirect('/yunwei/blog')

def contentblog(req):
    username = req.session['username']
    con_username = req.GET['username']
    if username == con_username:
        LIST = BLOG.objects.filter(id=req.GET['id'])
        return render_to_response('adminlte/xheditor-1.2.2/content_blog.html',{'LIST':LIST},context_instance=RequestContext(req,processors=[touxiang]))

    else:
        return HttpResponse('你没有权限编辑此内容！')

def contentselblog(req):
    name = req.session['username']
    if req.GET['content']:
	if req.GET['content'].strip() == '':
		CONTENT = 'hide'
	else:
		CONTENT = ''
        LIST = BLOG.objects.filter(Q(title__icontains=req.GET['content'])|Q(content__icontains=req.GET['content'])|Q(username__icontains=req.GET['content'])).order_by('-id')
        message_list = MESSAGE.objects.order_by('-blogid').all()
        id_list = BLOG.objects.all().values('id').order_by('-id')
	TOUXIANG = Profile.objects.all()
        list = []
        COUNT = {}
        for i in id_list:
                list.append(i['id'])
        for i in list:
                COUNT[i]=(MESSAGE.objects.filter(blogid=i).count())
        return render_to_response('adminlte/blog.html',{'username':name,'LIST':LIST,'message_list':message_list,'COUNT':COUNT,'TOUXIANG':TOUXIANG,'CONTENT':CONTENT},context_instance=RequestContext(req,processors=[touxiang]))
    else:
        return HttpResponseRedirect('/yunwei/blog')


def delblog(req):
    username = req.session['username']
    del_username = req.GET['username']
    if username == del_username:
        del_id = BLOG.objects.get(id=req.GET['del_id'])
        del_id.delete()
        del_id = MESSAGE.objects.filter(blogid=req.GET['del_id'])
        if del_id:
                del_id = MESSAGE.objects.filter(blogid=req.GET['del_id'])
                del_id.delete()
        return HttpResponseRedirect('/yunwei/blog')
    else:
        return HttpResponse('你没有权限删除此内容！')
