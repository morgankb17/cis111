//jshint esversion: 7

//write a function that identifies if the input is a digit
function isDigit(ch) {
  return (
    ch == "0" ||
    ch == "1" ||
    ch == "2" ||
    ch == "3" ||
    ch == "4" ||
    ch == "5" ||
    ch == "6" ||
    ch == "7" ||
    ch == "8" ||
    ch == "9"
  );
}

//write a function that counts the amount of digits in a string
let countDigits = function(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (isDigit(s.charAt(i))) count++;
  }
  return count;
};

//write a function that returns the longest word in the array
let maxWord = function(arr) {
  let longestIndex = 0;
  let longestLength = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longestLength) {
      longestIndex = i;
      longestLength = arr[i].length;
    }
  }
  return arr[longestIndex];
};

//write a function that returns the longest word in a sentence
let maxword2 = function(sentence) {
  let arr = sentence.split(" ");
  return maxWord(arr);
};
