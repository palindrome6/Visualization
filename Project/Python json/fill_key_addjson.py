# -*- coding: utf-8 -*-
import json
with open("INTERNET_Q.json") as json_file:
    json_data = json.load(json_file)
    print(json_data)
for key in json_data:
    if json_data[key]["2010"]>=60:
        json_data[key]['fillKey']='HIGH'
    elif json_data[key]["2010"]>=40:
        json_data[key]['fillKey']='MEDIUM'
    else:
        json_data[key]['fillKey']='LOW'
for key in json_data:
    print json_data[key]["fillKey"]

print(json_data)

with open('INTERNET_R.json', 'w') as outfile:
    json.dump(json_data, outfile)
# i=0
# for key,vslue in json_data:
#     if key.1990>=60:
#         key[fillKey]='HIGH'
#     elif key.value>=40:
#         key[fillKey]='MEDIUM'
#     else:
#         key[fillKey]='LOW'