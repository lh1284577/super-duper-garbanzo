#coding=utf-8
from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from django.template import RequestContext
from django import forms
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from views import touxiang
import yunwei.auth
import os
import json  
from statistics import listdisplay,logdisplay


@yunwei.auth.login_check()
def deployview(req):
	username = req.session['username']
        timestring = req.GET.get('timer',None)
        if timestring == None:
		dict = ''
                return  render_to_response('adminlte/deploy.html',{'username':username,'dict':dict},context_instance=RequestContext(req,processors=[touxiang]))
        else:
		#listdisplay(timestring)
		dict = ''
	 	#dict = open('/data/mysite/baiwei/yunwei/test.txt','r')
		#return HttpResponse(dict.read())
		#dict.close()
                return render_to_response('adminlte/deployview.html',{'username':username,'dict':dict},context_instance=RequestContext(req,processors=[touxiang]))


#@yunwei.auth.login_check()
def deploylog(req):
	timerparameter = req.GET.get('timerparameter')
	dict = logdisplay(timerparameter)
	return render_to_response('adminlte/dmlog.html',{'dict':dict},context_instance=RequestContext(req,processors=[touxiang]))
