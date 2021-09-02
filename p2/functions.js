//Req. 3-A
function avg3(value1, value2, value3) {
  return (value1 + value2 + value3) / 3;
}

//Req. 3-B
function computeTip(price, percentage) {
  return "\u0024" + (price * percentage).toFixed(2);
}

//Req. 3-C
function pizzaPSI(pizzaCost, pizzaDiameter) {
  return "\u0024" + (cost / (Math.PI * (diameter / 2) ** 2)).toFixed(2);
}

//Req. 3-D
function isAlpha() {
  //convert ch to uppercase
  ch = ch.toUpperCase();
  if (ch >= "A" && ch <= "Z") {
    return true;
  } else {
    return false;
  }
}

//Req. 3-E
function sumNumbers(n) {
  let count = n,
    i = 0,
    sum = 0;
  while (i <= count) {
    sum = i + sum;
    i++;
  }
  return sum;
}
