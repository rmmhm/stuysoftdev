# Team Smooth Brain - May Hathaway, Helena Williams, Ryan Ma
# SoftDev
# K10 -- Putting Little Pieces Together
# 2020-10-13

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.run()

# "about to print __name__" and "__main__" show up in the terminal!
