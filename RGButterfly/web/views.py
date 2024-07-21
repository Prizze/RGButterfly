from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Service


# Create your views here.
def index(request):
    return render(request, 'web/main.html')

def about(request):
    return render(request, 'web/about.html')

def service(request, service_id):
    service = get_object_or_404(Service, id=service_id)
    options = service.options.all()
    return render(request, 'web/service.html', {'service': service, 'options': options})