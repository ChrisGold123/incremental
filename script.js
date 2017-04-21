var armor = 0;
var two = 0;
var costTwo = 10;

function giveOne(number) {
  armor += number;
  document.getElementById('armory').innerHTML = armor;
}

function buyTwo() {
  if(armor >= costTwo) {
    two += 1;
    armor -= costTwo;
    costTwo *= 1.1;
    document.getElementById('costTwo').innerHTML = costTwo;
  }
}
