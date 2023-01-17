import numpy as np
import pandas as pd
import json

# 파일
path = "./menuListTest/recipe.json"

with open(path, "r", encoding="utf-8") as json_file:
  json_data = json.load(json_file)
json.dumps(json_data, indent="\t", ensure_ascii=False)

for i in json_data:
  menuName = i['menu_title']
  # menuList.append(menuName)
  print(menuName)

keyword = np.array([
  "탕", "찌개", "국", "전골", "밥", "볶음밥", "덮밥", "비빔밥", "주먹밥", "죽", "국밥", "김밥",
  "김치", "깍두기", "열무", "샐러드", "구이", "돼지", "닭", "소", "쇠고기", "소고기", "불고기",
  "양", "스테이크", "조림", "볶음", "찜", "무침", "라면", "파스타", "전", "튀김", "버섯", "된장",
  "대하", "새우", "게", "맛살", "어묵", "치즈", "고구마", "쑥", "달래", "냉이", "두릅", "딸기",
  "나물", "꼬막", "더덕", "오만둥이", "미더덕", " 쭈꾸미", "바지락", "조개", "다슬기", "감자",
  "장어", "전복", "갈치", "참외", "토마토", "고구마", "옥수수", "도라지", "냉면", "은행", "무",
  "배추", "호박", "굴", "고등어", "홍합", "삼치", "우엉", "돈까스", "고추", "크림", "만두", 
  "시래기", "관자", "숙주", "잡채", "황태", "오리", "묵", "유부", "미역", "오징어", "스튜",
  "시금치", "연어", "치킨", "가자미"
])