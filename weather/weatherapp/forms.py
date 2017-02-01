from django import forms

class NameForm(forms.Form):
    #location type: true for latitude longitude, false for city name
    locType = forms.BooleanField(required=False, widget=forms.HiddenInput)
    
    #field to hold the user provided location
    userLoc = forms.CharField(label='Your name', max_length=100)