// jshint esversion: 7

// define functions

function square(a, a) {
  return a * a;
}

// declare variables

let alpha1, alpha2, alpha3, alpha4;

//input: prompt user for a number

alpha3 = prompt("enter a number to square");
alpha4 = prompt("enter a second number to square");

//Processing:

alpha1 = square(alpha3, alpha3);
alpha2 = square(alpha4, alpha4);

//Output:
console.log("first number squared = " + alpha1);
console.log("second number squared = " + alpha2);
