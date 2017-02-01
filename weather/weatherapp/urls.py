from django.conf.urls import *

from . import views


urlpatterns = [
    # Examples:
    # url(r'^$', weather.views.home, name='home'),
   
    url(r'^$', views.index, name='index'),
    url(r'^weather/$', views.get_weather, name='get weather'),
    url(r'^about/$', views.about, name='about'),

    #url(r'^$', HomePageView.as_view(), name='index'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
]
