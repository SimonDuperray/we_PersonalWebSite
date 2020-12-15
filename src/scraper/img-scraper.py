import requests
from bs4 import BeautifulSoup

urlLinked = ["https://www.linkedin.com/in/gomezfranck/", "https://www.linkedin.com/in/améliedousteyssier/", "https://www.linkedin.com/in/jules-delétang-4607431a9/", "https://www.linkedin.com/in/titouan-machet/", "https://www.linkedin.com/in/zara-marks-9411451a1/", "https://www.linkedin.com/in/léopold-denis-b960011b1/"]

# for i in range(len(urlLinked)):
#     page = requests.get(urlLinked[i])
#     soup = BeautifulSoup(page.content, 'html.parser')

page = requests.get("https://www.linkedin.com/in/gomezfranck/")
soup = BeautifulSoup(page.content, 'html.parser')
print(soup.find(class_="authentication-outlet"))