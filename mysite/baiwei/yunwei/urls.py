from django.conf.urls import patterns, url
from yunwei import views
from yunwei import blog
from yunwei import deploy
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', views.index),
    url(r'deployview', deploy.deployview),
    url(r'deploylog', deploy.deploylog),
    url(r'^profileset',views.profileset),
    url(r'^profile',views.profile),
    url(r'^login',views.login,name = 'login'),
    url(r'^regist',views.regist,name = 'regist'),
    url(r'^logout_view',views.logout_view),
    url(r'^blog',blog.blog),
    url(r'^contentblog',blog.contentblog),
    url(r'^edit',blog.edit),
    url(r'^addblog',blog.addblog),
    url(r'^delblog',blog.delblog),
    url(r'^contentselblog',blog.contentselblog),
    url(r'^add',blog.add),
    url(r'^_(?P<id>[0-9,a-z,A-Z,_,.,\,]+)',views.charts),
    url( r'^(.*)$', 'django.views.static.serve',{ 'document_root': '/data/mysite/baiwei/yunwei/templates/adminlte' }),
)+static(settings.STATIC_URL)
