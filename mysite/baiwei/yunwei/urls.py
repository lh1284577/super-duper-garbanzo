from django.conf.urls import patterns, url, include
from yunwei import views
from yunwei import blog
from yunwei import deploy
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

from rest_framework.routers import DefaultRouter
from rest_framework_swagger.views import get_swagger_view
import os


router = DefaultRouter()
router.register(r'BLOG', views.BLOGViewSet)
schema_view = get_swagger_view(title='API')

urlpatterns = patterns('',
    url(r'^api/', include(router.urls)),
    url(r'^swagger/', schema_view),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

#blog
    url(r'^addblog', blog.BlogAddView.as_view()),
    #url(r'^addblog',blog.addblog),
    url(r'^delblog',blog.delblog),
    url(r'^contentselblog',blog.contentselblog),
    url(r'^contentblog',blog.contentblog),
    url(r'^blog',blog.blog),
    url(r'^edit',blog.edit),
    url(r'^add',blog.add),

    url(r'deployview', deploy.deployview),
    url(r'deploylog', deploy.deploylog),

    url(r'^$', views.index),
    url(r'^profileset',views.profileset),
    url(r'^profile',views.profile),
    url(r'^login',views.login,name = 'login'),
    url(r'^regist',views.regist,name = 'regist'),
    url(r'^logout_view',views.logout_view),
    url(r'^_(?P<id>[0-9,a-z,A-Z,_,.,\,]+)',views.charts),
    url( r'^(.*)$', 'django.views.static.serve',{ 'document_root': os.getcwd() + '/yunwei/templates/adminlte' }),
)+static(settings.STATIC_URL)
