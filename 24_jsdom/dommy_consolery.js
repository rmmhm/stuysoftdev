// Team lauma v2 :: Pak Ming Lau, Ryan Ma
// SoftDev pd1
// K23 -- JS Functionality
// 2021-04-19
// --------------------------------------------------

//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");

//standard creation of variables and setting them to a value (dynamic typing)
var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30; //overides the value of j with 30, but outside of this function j = 20
  return j+x;
};


//instantiate an object, we can also have functions inside of lists
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) { //to call this function, we use o.func(2)
            return x+30;
          }
        };


//(define fact (lambda (n) ...)
var fact = function(n) {
  var prod=1;
  for ( ; n > 1 ; n--){ //empty statement for the first part of the for() (because it's unnecessary to create a counter)
    prod = prod * n;
  }
  return prod;
};


//(define fact (lambda (n) ...)
//standard calculation of factorial using recursion
var factR = function(n) {
  if ( n<=1 ) {
    return 1;
  }
  else {
    return n * factR(n-1);
  }
};

//adds an item to the ordered list in index.html
var addItem = function(text) {
  var list = document.getElementById("thelist"); //this refers to the <ol> in index.html because id="thelist"
  var newitem = document.createElement("li"); //this creates a <li> element in html
  newitem.innerHTML = text; //this inserts text between <li></li>
  list.appendChild(newitem); //adds a new item to the end of the ordered list
};

//removes an item in the ordered list in index.html (WARNING: if you want to remove the 1st item in the ordered list, use removeItem(0))
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

//when first called, only the first and last item in the ordered list turned red
//adds red to the end of the li element class, ex: li with element "blue green" -> "blue green red"
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

//adds red to li elements with even index (odd numbered items in the ol)
//adds blue to li elements with odd index (even numbered items in the ol)
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

/*buttonCallback(10) prints out when an object on the html page is clicked
here comes e...
//prints MouseEvent object
here comes 'this'...
<button id="b">The button</button>
*/
var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}

//when the user clicks on the button, the above function is called
var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);

//adds red to to classList
var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this); //prints the element
  this.classList.add('red');
}

var thelist = document.getElementById("thelist");
var litems = thelist.children; //gets all of the elements in the ordered list
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback); //adds red to the class of the li element
  //mouseover and mouseout switch between the colors in the order of the colors in the li element's class
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);
    this.classList.toggle('green'); //changes the color to green when the mouse hovers over the li element
  });
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue'); //changes the color to blue when the mouse moves out of the li element
  });
}