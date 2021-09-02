// jshint esversion: 7

// define functions

function toEuros(dollars) {
  return dollars * 0.9;
}

// declare variables

let euros1, euros2;
let d1, d2;

// Input
d1 = 1;
d2 = 10;

// Processing
euros1 = toEuros(d1);
euros2 = toEuros(d2);

// Output
console.log(d1 + "dollars = " + euros1 + "euros");
alert(d1 + "dollars = " + euros1 + "euros");

console.log(d2 + "dollars = " + euros2 + "euros");
alert(d2 + "dollars = " + euros2 + "euros");
