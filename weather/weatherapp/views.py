
import textwrap
import urls
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.base import View
from django.template import loader
from .forms import NameForm
from .apiCall import getWeather
from json2html import *

def index(request):
    form = NameForm()
    return render(request, 'weather.html', {'form': form})
    
def get_weather(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = NameForm(request.POST)
        
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            st=getWeather(form.cleaned_data['userLoc'],form.cleaned_data['locType'])

            content = {'location': st['name'], 'temp': st['main']['temp'],'tempmax': st['main']['temp_max'],
                       'tempmin': st['main']['temp_min'],'description': st['weather'][0]['description'],
                       'wind': st['wind']['speed'] }

            # redirect to a new URL:json2html.convert(json=st)
            return render(request, 'weather.html', {'form': form,'content': content})

    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()

    return render(request, 'weather.html', {'form': form})

def about(request):
    return render(request, 'about.html')