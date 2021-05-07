// LauMa v3 - Pak Ming Lau and Ryan Ma
// SoftDev pd1
// K26 -- They lock us in the tower whenever we get caught
// 2021-05-05

//access canvas and buttons via DOM
var c = document.getElementById("playground");// GET CANVAS
var dotButton = document.getElementById("buttonCircle");// GET DOT BUTTON
var stopButton = document.getElementById("buttonStop");// GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#FF0000";

var requestID;  //init global var for use with animation frames

//var clear = function(e) {
var clear = (e) => {
    console.log("clear invoked...")
    ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 0;
var growing = true;

//var drawDot = function() {
var drawDot = () => {
    console.log("drawDot invoked...")

    window.cancelAnimationFrame(requestID);
    clear();
    ctx.beginPath(); //necessary for circles to disappear when cleared
    ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
    ctx.fill();
    if(growing) {
        radius++;
        growing = radius <= c.width / 2; // if growing, then it should turn false when the max radius is exceeded
    }else {
        radius--;
        growing = radius <= 5; // if not growing, then it should turn back to true when the min radius is reached
    }
    requestID = window.requestAnimationFrame(drawDot);
};


//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...")
    console.log( requestID );
    window.cancelAnimationFrame(requestID);
};


dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);