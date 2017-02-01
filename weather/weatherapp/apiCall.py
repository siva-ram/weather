import urllib2, urllib, json

def getWeather(locType,type):
    baseurl = "http://api.openweathermap.org/data/2.5/weather?APPID=3630d0ea4b88f536fd2c070d919ce93d&units=imperial&"
    if type == True:
        api_url = baseurl + urllib.urlencode({'lat':locType.split('|')[0],'lon':locType.split('|')[1]})
    else:
        api_url = baseurl + urllib.urlencode({'q':locType})
    result = json.loads(urllib2.urlopen(api_url).read())
    return result



