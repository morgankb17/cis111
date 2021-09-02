// jshint esversion: 7

// Req. 2-A
function countUp(n) {
  let result = "";

  for (var i = 1; i <= n; ++i) {
    result = result + i + " ";
  }
  return result;
}

// Req. 2-B
function countDown(n) {
  let i = n,
    result = "";

  while (i >= 1) {
    result = result + i + " ";
    --i;
  }
  return result;
}

// Req. 2-C
function isDivBy3and5(n) {
  if (n % 3 == 0 && n % 5 == 0) return true;
  else return false;
}
// Req. 2-D
//result function
function fizzBuzzList(n) {
  let result = "";
  for (var i = 0; i < n; i++) {
    if (isDivBy3and5(i)) {
      result = result + i + " ";
    }
  }
  return result;
}

// Req. 2-E
function fizz_Buzz_and_fizzBuzz(n) {
  let list = "";
  var i = 0;
  while (i <= n) {
    if (isDivBy3and5(i)) list = list + i + " fizzBuzz, ";
    else if (i % 3 == 0) list = list + i + " fizz, ";
    else if (i % 5 == 0) list = list + i + " buzz, ";
    i++;
  }
  return list;
}

// Req. 2-F
function fizz_Buzz_and_fizzBuzz_XC(n) {
  let list = "";
  var i = 0;
  while (i <= n) {
    if (isDivBy3and5(i)) list = list + i + " fizzBuzz, ";
    else if (i % 3 == 0) list = list + i + " fizz, ";
    else if (i % 5 == 0) list = list + i + " buzz, ";
    if (i < n && (i % 3 == 0 || i % 5 == 0)) list = list + ", ";
    i++;
  }
  return list;
}

// Req. 2-G
let isVowel = function(ch) {
  ch = ch.toUpperCase();
  if (
    ch === "A" ||
    ch === "E" ||
    ch === "I" ||
    ch === "O" ||
    ch === "U" ||
    ch === "Y"
  ) {
    return true;
  } else {
    return false;
  }
};
// Req. 2-H

let getVowels = function(str) {
  let vowelList = "";
  for (var i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      vowelList = vowelList + " " + str[i];
    }
  }
  return vowelList;
};
