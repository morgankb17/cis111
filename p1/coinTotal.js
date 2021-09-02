// jshint esversion: 7

// define functions

function coinTotals(pennies, nickels, dimes, quarters, halfDollars) {
  return (
    pennies * 1 + nickels * 5 + dimes * 10 + quarters * 25 + halfDollars * 50
  );
}

// declare variables
let p, n, d, q, h, cents1, cents2;
// INPUT

p = 1;
n = 1;
d = 1;
q = 1;
h = 1;

// PROCESSING:
cents1 = coinTotals(p, n, d, q, h);

p = 10;
n = 10;
d = 10;
q = 10;
h = 10;
cents2 = coinTotals(p, n, d, q, h);

// OUTPUT:
console.log("cents1 = " + cents1);
console.log("cents1 = " + cents2);
