import numpy as np
import pandas as pd

# 제철 음식 분류
'''
봄-03-04-05
여름-06-07-08
가을-09-10-11
겨울-12-01-02
'''
seasons = np.array([
  ["봄", 3 , 4, 5],
  ["여름", 6 , 7, 8],
  ["가을", 9 , 10, 11],
  ["겨울", 12 , 1, 2],
])

seasonDict = {}
seasonList = []
for s in range(len(seasons)):

  seasonDict={
    "season" : seasons[s][0],
    "monthStart" : seasons[s][1],
    "monthMidle" : seasons[s][2],
    "monthEnd" : seasons[s][3]
  }
  seasonList.append(seasonDict)

seasonMenu = np.array([])

print(seasonMenu)
  
# 시간대 음식 분류
'''
아침-06-10
점심-11-14
저녁-17-20
간식-11-16
야식-21-24
'''
times = np.array([
  ["아침", 6, 10],
  ["점심", 11, 14],
  ["저녁", 17, 20],
  ["간식", 11, 16],
  ["야식", 21, 24],
])

timeDict = {}
timeList = []
for t in range(len(times)):
  timeDict = {
    "timeName" : times[t][0],
    "timeStart" : times[t][1],
    "timeEnd" : times[t][2],
  }
  timeList.append(timeDict)

# 날씨 음식 분류
weathers = np.array([
  ["Clear","맑음"],
  ["Cloud", "구름"],
  ["Wind", "바람"],
  ["Rain", "비"],
  ["Snow", "눈"],
  ["Fog","안개"],
  ["Hail", "우박"],
  ["Tropical Night", "열대야"],
  ["Heat Wave", "폭염"],
  ["Cold Wave", "한파"]
])

weatherDict = {}
weatherList = []
for w in range(len(weathers)):
  weatherDict = {
    "weatherEnName" : weathers[w][0],
    "weatherKrName" : weathers[w][1],
  }
  weatherList.append(weatherDict)
  
'''
맑음
구름
바람
비
눈
안개
우박
열대야
폭염
한파
'''

# 온도 음식 분류
temps = np.array([
  ["", 0],
  [1, 5],
  [5, 10],
  [10, 15],
  [15, 20],
  [20, 25],
  [25, 30],
  [30, ""]
])

tempDict = {}
tempList = []
for tp in range(len(temps)):
  tempDict = {
    "lowestTemp" : temps[tp][0],
    "highestTemp" : temps[tp][1] 
  }
  tempList.append(tempDict)
  

'''

~ 0
1 ~ 5
5 ~ 10
10 ~ 15
15 ~ 20
20 ~ 25
25 ~ 30
30 ~
'''

data = {
  "season" : seasonList,
  "time" : timeList,
  "weather" : weatherList,
  "temp" : tempList
}

print(data)
