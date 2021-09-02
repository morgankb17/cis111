// jshint esversion: 7

// define functions

function toEuros(dollars) {
  return dollars * 0.9;
}

//declare variables

let euros1, euros2;
let d1, d2; // number of dollars to convert

//Input:

d1 = 1;
d2 = 10;

//Processing:

euros1 = toEuros(d1);

//Output:

console.log(d1 + " dollar = " + euros1 + " euros ");
