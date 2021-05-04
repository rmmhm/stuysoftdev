// LauMa v3 - Pak Ming Lau and Ryan Ma
// SoftDev pd1
// K25 -- I See a Red Door...
// 2021-05-03

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var rectMode = true;

var toggle = () => {
    rectMode = !rectMode
    if(rectMode) {
        document.getElementById("toggle").innerText = "Rectangle"
    }else {
        document.getElementById("toggle").innerText = "Dot"
    }
}

document.getElementById("toggle").addEventListener("click", toggle);

var clear = () => {
    console.log("clearing canvas");
    ctx.clearRect(0, 0, c.width, c.height);
    console.log("ET VOILA. eh?");
}

document.getElementById("clear").addEventListener("click", clear);

var drawRect = (e) => {
    console.log("drawing rectangle...")
    var x = e.offsetX; // x-coordinate of the mouse relative to the element
    var y = e.offsetY; // y-coordinate of the mouse relative to the element

    ctx.beginPath(); // starts a new path for drawing
    ctx.fillRect(x, y, 20, 40); // draws a rectangle, given the coordinates of the top left corner, width, and height
    ctx.stroke(); // draws in the path described
}

var drawDot = (e) => {
    console.log("drawing dot...")
    var x = e.offsetX
    var y = e.offsetY

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI); // draws an arc, given the coordinates to the center, radius, starting angle, and end angle
    ctx.stroke();
    ctx.fill(); // fills in the drawn circle
}

var draw = (e) => {
    if(rectMode) {
        drawRect(e);
    }else {
        drawDot(e);
    }
}

document.getElementById("slate").addEventListener("mouseover", draw());

// e.preventDefault(), prevents the default behavior of an event. Ex: checkbox default is to toggle the checkbox, but e.preventDefault() makes it so that the box is only checked when mouse is held down