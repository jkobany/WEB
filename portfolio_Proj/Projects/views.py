from django.shortcuts import render

# Create your views here.
from .models import project


# Create your views here.
def homepage(request):
    return render(request, 'Projects/index.html')