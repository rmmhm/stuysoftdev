# Team Smooth Brain - May Hathaway, Helena Williams, Ryan Ma
# SoftDev
# K10 -- Putting Little Pieces Together
# 2020-10-13

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"

app.run()

# doesn't print __name__
