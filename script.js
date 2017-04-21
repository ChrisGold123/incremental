var armor = 0;
var two = 0;
var costTwo = 10;
var prodTwo = 0;
var incTwo = 1;

function giveOne(number) {
  armor += number;
  document.getElementById('armory').innerHTML = armor;
}

function buyTwo() {
  if(armor >= costTwo) {
    two += 1;
    armor -= costTwo;
    costTwo = Math.floor(costTwo * Math.pow(1.1, two);
    document.getElementById('costTwo').innerHTML = costTwo;
    document.getElementById('armory').innerHTML = armor;
    document.getElementById('amTwo').innerHTML = two;
  }
}

setInterval(function() {
  giveOne(two);
}, 1000);
