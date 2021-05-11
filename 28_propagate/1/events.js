// demo 1
// JS event propagation

var tds = document.getElementsByTagName('td');

var clicky = function(e) {
  alert( this.innerHTML ); // "this" refers to that specific table's data
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}