// jshint esversion: 7

// define functions

function toEuros(dollars) {
  return dollars * 0.9;
}

// declare variables

let euros1, euros2;
let d1, d2;

// Input
d1 = Number(prompt("enter a number of dollars"));
d2 = Number(prompt("enter a number of dollars"));

// Processing
euros1 = toEuros(d1);
euros2 = toEuros(d2);

// Output
console.log(d1.toFixed(2) + " dollars = " + euros1.toFixed(2) + " euros");
alert(d1.toFixed(2) + " dollars = " + euros1.toFixed(2) + " euros");

console.log(d2.toFixed(2) + " dollars = " + euros2.toFixed(2) + " euros");
alert(d2.toFixed(2) + " dollars = " + euros2.toFixed(2) + " euros");
