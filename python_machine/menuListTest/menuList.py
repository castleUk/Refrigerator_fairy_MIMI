import numpy as np
import pandas as pd
import json

# 파일
# path = "./python_machine/menuListTest/recipe.json"
path = "./menuListTest/recipe.json"

with open(path, "r", encoding="utf-8") as json_file:
  json_data = json.load(json_file)
json.dumps(json_data, indent="\t", ensure_ascii=False)

menuList = []
for i in json_data:
  menuName = i['menu_title']
  menuList.append(menuName)

# 
menuKind = []
menuDict = {}

soup_01 = []
soup_02 = []
soup_03 = []
soup_04 = []
soup_05 = []
rice_01 = []
rice_02 = []
rice_03 = []
rice_04 = []
rice_05 = []
rice_06 = []
rice_07 = []
rice_08 = []
kimchi_01 = []
kimchi_02 = []
kimchi_03 = []
grill = []
salad = []
meat = []
chicken = []
cow = []
steak = []
tteokbokki = []
stir_fry = []
noodle_01 = []
noodle_02 = []
sheep = []
afforestation = []
steamed = []
jeon = []
mushroom = []
tofu = []
miso = []
shrimp_01 = []
shrimp_02 = []
crab_01 = []
crab_02 = []
fried = []
fish_cake = []
cheese = []
egg = []
sweet_potato = []

for menu in menuList:
  # 분류
  if "탕" in menu:
    soup_01.append(menu)
  if "찌개" in menu:
    soup_02.append(menu)
  if "국" in menu:
    soup_03.append(menu)
  if "전골" in menu:
    soup_04.append(menu)
  if "밥" in menu:
    rice_01.append(menu)
  if "볶음밥" in menu:
    rice_02.append(menu)
  if "덮밥" in menu:
    rice_03.append(menu)
  if "비빔밥" in menu:
    rice_04.append(menu)
  if "주먹밥" in menu:
    rice_05.append(menu)
  if "죽" in menu:
    rice_06.append(menu)
  if "국밥" in menu:
    rice_07.append(menu)
  if "김밥" in menu:
    rice_08.append(menu)
  if "김치" in menu:
    kimchi_01.append(menu)
  if "깍두기" in menu:
    kimchi_02.append(menu)
  if "열무" in menu:
    kimchi_03.append(menu)
  if "구이" in menu:
    grill.append(menu)
  if "샐러드" in menu:
    salad.append(menu)
  if "돼지" in menu:
    meat.append(menu)
  if "닭" in menu:
    chicken.append(menu)
  if "쇠고기" in menu:
    cow.append(menu)
  if "소고기" in menu:
    cow.append(menu)
  if "스테이크" in menu:
    steak.append(menu)
  if "양고기" in menu:
    sheep.append(menu)
  if "떡볶이" in menu:
    tteokbokki.append(menu)
  if "볶음" in menu:
    stir_fry.append(menu)
  if "조림" in menu:
    afforestation.append(menu)
  if "찜" in menu:
    steamed.append(menu)
  if "파스타" in menu:
    noodle_01.append(menu)
  if "라면" in menu:
    noodle_02.append(menu)
  if "전" in menu:
    jeon.append(menu)
  if "버섯" in menu:
    mushroom.append(menu)
  if "두부" in menu:
    tofu.append(menu)
  if "된장" in menu:
    miso.append(menu)
  if "대하" in menu:
    shrimp_01.append(menu)
  if "새우" in menu:
    shrimp_02.append(menu)
  if "게" in menu:
    crab_01.append(menu)
  if "맛살" in menu:
    crab_02.append(menu)
  if "튀김" in menu:
    fried.append(menu)
  if "어묵" in menu:
    fish_cake.append(menu)
  if "치츠" in menu:
    cheese.append(menu)
  if "달걀" in menu:
    egg.append(menu)
  if "고구마" in menu:
    sweet_potato.append(menu)
  
  menuDict = {
    "탕" : soup_01,
    "찌개" : soup_02,
    "국" : soup_03,
    "전골" : soup_04,
    "밥" : rice_01,
    "볶음밥" : rice_02,
    "덮밥" : rice_03,
    "비빔밥" : rice_04,
    "주먹밥" : rice_05,
    "죽" : rice_06,
    "국밥" : rice_07,
    "김밥" : rice_08,
    "김치" : kimchi_01,
    "깍두기" : kimchi_02,
    "열무" : kimchi_03,
    "구이" : grill,
    "샐러드" : salad,
    "돼지" : meat,
    "닭" : chicken,
    "소" : cow,
    "스테이크" : steak,
    "떡볶이" : tteokbokki,
    "볶음" : stir_fry,
    "파스타" : noodle_01,
    "라면" : noodle_02,
    "양" : sheep,
    "조림" : afforestation,
    "찜" : steamed,
    "전" : jeon,
    "버섯" : mushroom,
    "두부" : tofu,
    "된장" : miso,
    "대하" : shrimp_01,
    "새우" : shrimp_02,
    "게" : crab_01,
    "맛살" : crab_02,
    "튀김" : fried,
    "어묵" : fish_cake,
    "치츠" : cheese,
    "달걀" : egg,
    "고구마" : sweet_potato
  }

print(menuDict)

# 레시피 json 저장
# path2 = './python_machine/menuListTest/menu.json'
# with open(path2, 'w', encoding="utf-8") as file:
#   json.dump(menuDict, file, indent="\t", ensure_ascii=False)
#   # file.write(',')
