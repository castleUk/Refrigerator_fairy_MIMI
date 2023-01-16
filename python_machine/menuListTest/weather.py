import requests
import numpy as np
# import pandas as pd
import json
import csv

city = "Seoul"
key = '6cd557f1c9eb8846c03da7621aabc12e'
lang = 'kr'
units = 'metric'
api = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&lang={lang}&units={units}'

result = requests.get(api)
result = json.loads(result.text)

# 
weatherList = []
weatherDist = {}

weatherName = result['name']
weatherMain = result['weather'][0]['main']
weatherDesc= result['weather'][0]['description']
weatherIcon = result['weather'][0]['icon']
weatherTemp = result['main']

if weatherMain == 'Clear':
  print(weatherMain)
if weatherMain == 'Wind':
  print(weatherMain)
if weatherMain == 'Cloud':
  print(weatherMain)
if weatherMain == 'Rain':
  print(weatherMain)
if weatherMain == 'Snow':
  print(weatherMain)

'''
Clear : 맑음
Wind : 바람
Cloud : 구름
Rain : 비
Snow : 눈

'''



# 레시피 json 저장
# path = './/menu/menu.json'
# with open(path, 'a', encoding="utf-8") as file:
#   json.dump(result, file, indent="\t", ensure_ascii=False)
#   # file.write(',')
