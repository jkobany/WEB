from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from Projects import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('admin/', admin.site.urls),
]

