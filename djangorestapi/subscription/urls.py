from django.urls import path

from . import views

app_name = 'subscription'
urlpatterns = [
    path('email',views.subscribe.as_view(),name='subscribe'),
    path('users',views.users.as_view(),name='users'),
        
]
