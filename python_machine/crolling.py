from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import json

baseUrl = 'https://www.google.com/search?q='
plusUrl = input('무엇을 검색할까요? :')
url = baseUrl + quote_plus(plusUrl)


driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get(url)

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')

# 이름
nameIngr = plusUrl

#이미지
img = soup.select_one('#media_result_group > div > div > div:nth-child(2) > div > div:nth-child(1) > a > div > div > img')["src"]

# 1회 제공량당 함량
servingSize = soup.select_one('#kno-nf-nc > table > tbody > tr:nth-child(1) > td > div > div > select').text
# 열량
calorie = soup.select_one('#kno-nf-nc > table > tbody > tr.PZPZlf.kno-nf-cq > td > span.abs').text
# 지방
fat = soup.select_one('#kno-nf-na > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(1) > span.abs').text
# 콜레스테롤
cholesterol = soup.select_one(
    '#kno-nf-na > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(1) > span.abs').text
# 나트륨
sodium = soup.select_one('#kno-nf-na > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(1) > span.abs').text
# 칼륨
potassium = soup.select_one(
    '#kno-nf-na > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(1) > span.abs').text
# 탄수화물
carbohydrates = soup.select_one(
    '#kno-nf-na > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(1) > span.abs').text
# 단백질
protein = soup.select_one('#kno-nf-na > table:nth-child(1) > tbody > tr:nth-child(9) > td:nth-child(1) > span.abs').text

print(img)
print(nameIngr)
print(servingSize)
print(calorie)
print(fat)
print(cholesterol)
print(sodium)
print(potassium)
print(carbohydrates)
print(protein)

# json 데이터 만들기
item_ingr = {"name": nameIngr, "servingSize": servingSize, "calorie": calorie, "fat": fat, "cholesterol": cholesterol,
             "sodium": sodium, "potassium": potassium, "carbohydrates": carbohydrates, "protein": protein, "img_url" : img}

json_item_ingr = json.dumps(item_ingr, ensure_ascii=False)

print(json_item_ingr)
