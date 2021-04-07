from flask import Flask, render_template
import urllib, json

app = Flask(__name__)

f = open("key_nasa.txt", "r")
key = f.read()
link = "https://api.nasa.gov/planetary/apod?api_key=" + key

@app.route('/', methods = ["GET"])
def display():
    url = urllib.request.urlopen(link)
    img = json.loads(url.read())
    return render_template("main.html", image = img["url"])

if __name__ = '__main__':
    app.debug = True
    app.run()
