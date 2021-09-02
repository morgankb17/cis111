// jshint esversion: 6

function areaOfCircle(radius) {
  return Math.PI * radius ** 2;
}

//test the function
let area1, area2;
area1 = areaOfCircle(1);
area2 = areaOfCircle(5);
console.log("area1 = " + area1 + " area2 = " + area2);
