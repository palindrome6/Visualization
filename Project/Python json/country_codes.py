# -*- coding: utf-8 -*-
import pycountry
from iso3166 import countries
import json

with open("INTERNET_Y.json") as json_file:
    json_data = json.load(json_file)
    print(json_data)

i=0
for key in json_data:

    for c in countries:
        if c.name == key:
            key1=c.alpha3
            json_data[key1]=json_data.pop(key)
            i=i+1
            print key,i
j=0

with open('INTERNET_R.json', 'w') as outfile:
    json.dump(json_data, outfile)
print json_data
for key in json_data:
    j=j+1
    print key,j
germany = pycountry.countries.get(alpha2='DE')
print germany.alpha3
