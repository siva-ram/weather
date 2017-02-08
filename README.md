# Weather application https://theweather.zapto.org
-----------------------------------------------------------------

Developed a weather forecast website using the Django web framework on Python 2.7 and hosted it on apache(httpd) server on a amazon ec2 VM.

The Website has two functionalities
* Getting the weather by of your current location
* Search for the weather of another location

The home page has two button to select one of the above options

1. Getting the weather of your Current Location.
-----------------------------------------
When you click on the button "Get weather for your current location", we use the html 5 geolocation api to detect get the latitude and longitude(user has to give permission to allow geolocation) and post it to the server using javascript. The server processes the latitude and longitude information and return the weather information back.

Note: On chrome based browsers geolocation is only allowed on secured websites(https). I have installed mod_ssl and enabled https version of the website but didn't install a valid certificate(since it cost money to buy ssl certificates). So when you get the warning that certificate is not trusted please click on "proceed to website". On IE geolocation works even on http version of the site


2. Find the weather for another location
------------------------------
When you click on the button "Find the weather for another location",you will get a search box to type the location name (eg. cincinnati, New York..) and click the submit button. The data is sent to the server using http post and the server returns back the weather informantion.


I also added a static " about me " webpage(link in the homepage navigation bar)



Technologies Used:

1. Python and Django web framework

  Backend server code is written on python and Django

2. Javascript and Jquery

  Used for getting the user geolocation and support the UI interaction features.

3. Bootstrap

  HTML code is designed using Bootstrap with a free custom Bootstrap theme

4. Apache

  website is hosted on apache webserver
  
5. No-ip Dynamic dns
  Usied Noip for the dynamic dns theweather.zapto.org"
  
 
Getting the weather information
--------------------------------
the website gets the weather information from the api http://openweathermap.org/current. We make api calls to openweathermap passing on the location parameters to get the weather information.

Main parts of the code
------------------------

weather/weather/weatherapp/apiCall.py - contains the openweathermap api call code
weather/weather/weatherapp/views.py - controller that handles the website interaction
weather/weather/weatherapp/urls.py - url patterns
weather/weather/weatherapp/templates/ - contains the django view templates of all the pages
weather/weather/weatherapp/static/weatherapp/app.js - javascript code for detecting location and handing UI interactions.

Tools used
------------------
PTVS  for developing the django website on the local windows machine

Further improvements that can be done -- Use AJAX post to improve site responsiveness.


Django config file contents
---------------------------
```
Alias /static /var/www/weather/weather/weatherapp/static
<Directory /var/www/weather/weather/weatherapp/static>
    Allow from all
</Directory>

<Directory /var/www/weather/weather/weather/>
    <Files wsgi.py>
        Allow from all
    </Files>
</Directory>

WSGIDaemonProcess weather python-path=/var/www/weather/weather/weatherapp:/var/www/weather/venv/lib/python2.7/site-packages
WSGIProcessGroup weather
WSGIScriptAlias / /var/www/weather/weather/weather/wsgi.py
WSGISocketPrefix /var/run/wsgi
```

Sample commands used on VM
-------------
1. Installing python, apache and wsgi mod
  ```sudo yum install httpd-devel
  sudo yum install python27
  virtualenv -p /usr/bin/python2.7 venv
  sudo pip install mod_wsgi```
   
 
2. Install git and clone the app 
  ```sudo yum install git
  git clone https://github.com/siva-ram/weather.git```
 
3. Modify django conf 
  ```sudo nano /etc/httpd/conf.d/django.conf```

4. Install mod ssl
  ```sudo yum install mod_ssl```

5. Restart httpd
  ```sudo service httpd restart```
  
 Info on installing dynamic dns is present in the link
 https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dynamic-dns.html



