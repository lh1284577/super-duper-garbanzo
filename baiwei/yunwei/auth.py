#coding:utf-8
from django.http import HttpResponse,HttpResponseRedirect
def login_check():
        def decorator(func):
                def login_auth_check(req,id=None):
                        if req.method=='GET':
                                try:
                                        if req.session['username']:
                                                return func(req)
                                except:
                                        req.session.clear_expired()
                                        return HttpResponseRedirect('/yunwei/login')
                        else:
                                return HttpResponseRedirect('/yunwei')


                return login_auth_check
        return decorator
