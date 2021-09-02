// jshint esversion: 6

function areaOfRing(R, r) {
  return Math.PI * (R ** 2 - r ** 2);
}

let area1, area2;
area1 = areaOfRing(10, 8);
area2 = areaOfRing(4, 3);
console.log("area1 = " + area1 + " area2 = " + area2);
