// Team rap -- Ryan Ma, Alvin Wu, Pak Ming Lau
// SoftDev pd1
// K30 -- JSorcery
// 2021-05-17 

var c = document.getElementById("playground");
var playButton = document.getElementById("buttonPlay");
var resetButton = document.getElementById("buttonReset");

var ctx = c.getContext("2d");

ctx.fillStyle = "#000000";
var requestID = 0;
var playing = false;
var cowx = 250;
var cowy = 250;
var cow = new Image();
cow.src = "cow.jpg";
var counter = 0;

var start = () => {
	ctx.drawImage(cow,cowx,cowy,80,50);
}
var findcow = (e) => {
	console.log("executing findcow");
	//console.log("x-click at :" + e.offsetX);
	//console.log("y-click at :" +  e.offsetY);
	//console.log("cow at:" + cowx + "," + cowy);
	
	//if mouse is clicked within a certain radius of the cow, then make the cow disappear
	if (Math.abs(cowx - e.offsetX) < 50 && Math.abs(cowy - e.offsetY) < 50)
		{
		console.log("cow found");
		ctx.clearRect(0,0, c.width, c.height);

		//count how many times the cow has been found and give a response
		counter++;
		document.getElementById('cowcounter').innerHTML = "You found the cow: " + counter + " time(s)";
		evaluateworth();

		//randomly generate cow coordinates
		cowx = Math.floor(Math.random() * 420);
		cowy = Math.floor(Math.random() * 450);
		start();
		}
}

//let the viewer of the page have some variety based on how many they got
var evaluateworth = () =>
	{
	if (counter == 5)
		{document.getElementById('achievement').innerHTML += "wow, you're pretty goo- i mean moo" + "<br>";}
	if (counter == 10)
		{document.getElementById('achievement').innerHTML += "SHEEEEEEEEEESH" + "<br>";}
	if (counter == 15)
		{document.getElementById('achievement').innerHTML += "OK I SEE YOU" + "<br>";}
	if (counter == 20)
		{document.getElementById('achievement').innerHTML += "WHATTTT???" + "<br>";}
	if (counter == 25)
		{document.getElementById('achievement').innerHTML += "TOO GOOD" + "<br>";}
	if (counter == 30)
		{document.getElementById('achievement').innerHTML += "HAVE YOU CONSIDERED GOING PRO??" + "<br>";}
	if (counter == 35)
		{document.getElementById('achievement').innerHTML += "OH MY LORD LOOK AT THIS DUDE" + "<br>";}
	if (counter == 40)
		{document.getElementById('achievement').innerHTML += "ok i think that's enough now" + "<br>";}
	if (counter == 45)
		{document.getElementById('achievement').innerHTML += "wait yo chill" + "<br>";}
	if (counter == 50)
		{document.getElementById('achievement').innerHTML += "DUDE STOP" + "<br>";}
	if (counter == 55)
		{document.getElementById('achievement').innerHTML += "ALRIGHT MAN WE GET IT YOU CAN STOP NOW" + "<br>";}
	if (counter == 60)
		{document.getElementById('achievement').innerHTML += "please i have a family" + "<br>";}
	if (counter == 65)
		{document.getElementById('achievement').innerHTML += "send help plz" + "<br>";}
	if (counter == 70)
		{document.getElementById('achievement').innerHTML += "achievement unlocked: no lifer" + "<br>";}
	if (counter == 75)
		{document.getElementById('achievement').innerHTML += "alright man im gonna leave" + "<br>";}
	if (counter == 80)
		{document.getElementById('achievement').innerHTML += "no seriously, im gonna leave" + "<br>";}
	if (counter == 85)
		{document.getElementById('achievement').innerHTML += "alright well it seems like you don't care anyway so ima dip" + "<br>";}
	if (counter == 90)
		{document.getElementById('achievement').innerHTML += "PEACE" + "<br>";}
	}

c.addEventListener("click", findcow);
playButton.addEventListener("click", start);