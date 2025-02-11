from django.urls import path
from . import views
from .views import service
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path ('', views.index, name = "main"),
    path ('about', views.about, name = "about"),
    path('service/<int:service_id>/', service, name='service'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)