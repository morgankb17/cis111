//jshint esversion: 7

//count the amount of times a specific character is in a string
function countOccurences(str, ch) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == ch) {
      count++;
    }
  }
  return count;
}

// copy + pasted from instructions, modified
let isAlpha = function(ch) {
  if (ch >= "A" && ch <= "z") return true;
  else return false;
};

//count how many letters are in a given string
let countLetters = function(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (isAlpha(str.charAt(i))) count++;
  }
  return count;
};
