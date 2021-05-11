// Team CCC - Ryan Ma and Carlos Hernandez
// Softdev pd1
// K27 -- Guarding against Burnout 
// 2021-05-10

var c = document.getElementById("playground");
var startButton = document.getElementById("buttonStart");
var stopButton = document.getElementById("buttonStop");

var image = new Image()
image.src = "logo_dvd.jpg";

var ctx = c.getContext("2d");

var requestID;

var x = 300;
var y = 250;
let direction = [1,1]; // stores starting dvd logo direction

var clear = (e) => {
    console.log("clear invoked...")
    ctx.clearRect(0, 0, c.width, c.height);
};

var startAni = () => {
    buttonStop.disabled = false;
    console.log("startAni invoked...")
    window.cancelAnimationFrame(requestID);
    clear();

    if(x >= c.width - 100) // if borders are hit, set direction values to reflect bouncing off the borders
        direction[0] = -1;
    else if(x <= 0)
        direction[0] = 1;
    if(y >= c.height - 100)
        direction[1] = -1;
    else if(y <= 0)
        direction[1] = 1;

    x += direction[0];
    y += direction[1];

    ctx.drawImage(image, x, y, 100, 100);

    requestID = window.requestAnimationFrame(startAni);
}

var stopAni = () => {
    buttonStop.disabled = true;
    console.log("stopAni invoked...")
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

startButton.addEventListener("click", startAni);
stopButton.addEventListener("click", stopAni);