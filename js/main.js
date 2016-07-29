//1 sum of two numbers
var num1;
var num2;

function sum(num1,num2) {
  return num1 += num2;
}


//2 sum of array
var array = [2,4,5,9,12];
var sum = 0;
for(var i = 0; i < array.length; i++) {
  sum += array[i];
}

//3 F - C
function convert(fTemp) {
    return ((fTemp - 32) * (5/9));
}


//4 vowel count
var string = "this is a vowel count";
var vowelCount = 0;
for (var i = 0; i < string.length; i++) {
  if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u" ) {
    vowelCount +=1;
  }
}


//5 roll 2 dice
var dice = ["1", "2", "3", "4", "5", "6"];
function roll() {
  var score = dice[Math.floor(Math.random()*dice.length)];
  return score;
}
console.log("roll", [roll(), roll()]);


//6 array averag
var numbers = [3, 5, 7, 6, 6, 3, 1, 2, 9];
var sum = 0;
var avg = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += (numbers[i]);
  avg = (sum/numbers.length);
}
console.log("the average of the array is ", avg);


//7 - FizzBuzz
for (var i = 0; i <= 100; i++) {
  console.log(((["fizz "][i%3] || " ") + (["buzz "] [i%5] || " ") + i);
}


//8 factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log (factorial(4));





//9
