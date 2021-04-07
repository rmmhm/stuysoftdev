#!/usr/bin/env python
# Team cool-crabs Ryan Ma Carlos Hernandez
# SoftDev
# K19 -- Work with APIs and JSON
# 2021-04-06

from flask import Flask, render_template
from urllib.request import urlopen
from json import loads

app = Flask(__name__)

with open("./key_nasa.txt", "r") as f:
    key = f.readline()
    url = "https://api.nasa.gov/planetary/apod?api_key={}".format(key.strip())

@app.route("/")
def index():
    data = loads(urlopen(url).read())
    return render_template("main.html", pic=data["url"], expl=data["explanation"])

if __name__ == "__main__":
    app.debug = True
    app.run()
