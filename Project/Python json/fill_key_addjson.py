# -*- coding: utf-8 -*-
import json
with open("INTERNET_Q.json") as json_file:
    json_data = json.load(json_file)
    print(json_data)
for key in json_data:
    if json_data[key]["2011"]<=5:
        json_data[key]['fillKey']='LEQ5'
    elif json_data[key]["2011"]<=10:
        json_data[key]['fillKey']='LEQ10'
    elif json_data[key]["2011"]<=20:
        json_data[key]['fillKey']='LEQ20'
    elif json_data[key]["2011"]<=30:
        json_data[key]['fillKey']='LEQ30'
    elif json_data[key]["2011"]<=40:
        json_data[key]['fillKey']='LEQ40'
    elif json_data[key]["2011"]<=50:
        json_data[key]['fillKey']='LEQ50'
    elif json_data[key]["2011"]<=60:
        json_data[key]['fillKey']='LEQ60'
    elif json_data[key]["2011"]<=70:
        json_data[key]['fillKey']='LEQ70'
    else:
        json_data[key]['fillKey']='LEQ100'
for key in json_data:
    print json_data[key]["fillKey"]

print(json_data)

with open('INTERNET_2011.json', 'w') as outfile:
    json.dump(json_data, outfile)
# i=0
# for key,vslue in json_data:
#     if key.2011>=60:
#         key[fillKey]='HIGH'
#     elif key.value>=40:
#         key[fillKey]='MEDIUM'
#     else:
#         key[fillKey]='LOW'