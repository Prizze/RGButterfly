from django.contrib import admin
from django.urls import path, include
from web.views import handler404

urlpatterns = [
    path('admin/', admin.site.urls),
    path ('', include('web.urls'))
]

handler404 = 'web.views.handler404'