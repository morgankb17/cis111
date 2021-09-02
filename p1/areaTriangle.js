// jshint esversion: 7

// define functions

function A(b, h) {
  return b * h * 0.5;
}

// declare variables
let area1, area2, b1, b2, h1, h2;

// Input: prompt the user for the inputs
b1 = prompt("enter a value for base width");
h1 = prompt("enter a value for height length");
b2 = prompt("enter a value for base width");
h2 = prompt("enter a value for height length");

// Processing
area1 = A(b1, h1);
area2 = A(b2, h2);

// Output
console.log("base = " + b1 + " height = " + h1 + " area = " + area1);
console.log("base = " + b2 + " height = " + h2 + " area = " + area2);
