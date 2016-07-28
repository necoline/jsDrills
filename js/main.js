//1
var num1;
var num2;

function sum(num1,num2) {
  return num1 += num2;
}


//2
var array = [2,4,5,9,12];
var sum = 0;
for(var i = 0; i < array.length; i++) {
  sum += array[i];
}

//3
function convert(fTemp) {
    return ((fTemp - 32) * (5/9));
}


//4
var string = "this is a vowel count";
var vowelCount = 0;
for (var i = 0; i < string.length; i++) {
  if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u" ) {
    vowelCount +=1;
  }
}


//5
var dice = ["1", "2", "3", "4", "5", "6"];
function roll() {
  var score = dice[Math.floor(Math.random()*dice.length)];
  return score;
}
console.log("roll", [roll(), roll()]);

//6
var avgAr = [3, 5, 7, 6, 6, 3, 1, 2, 9];
function 








//7
