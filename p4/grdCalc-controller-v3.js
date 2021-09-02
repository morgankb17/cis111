// jshint esversion: 6

//your function goes here
let calcFnlPctg_3 = function(arr) {
  let pct =
    (((Number(arr[0]) + Number(arr[1]) + Number(arr[2])) / 300) * 0.7 +
      ((Number(arr[3]) +
        Number(arr[4]) +
        Number(arr[5]) +
        Number(arr[6]) +
        Number(arr[7])) /
        500) *
        0.3) *
    100;
  return Number(pct.toFixed(2));
};

let controller = function() {
  let mt,
    fnl,
    inputElems,
    finalPct,
    resultStr,
    valuesArr = [];

  //Input
  //one at a time:
  inputElems = document.querySelectorAll("input");
  console.log(inputElems); //NodeList
  console.log(Array.isArray(inputElems)); //false

  //read values entered by user into an array
  valuesArr[0] = inputElems[0].value;
  valuesArr[1] = inputElems[1].value;
  valuesArr[2] = inputElems[2].value;
  valuesArr[3] = inputElems[3].value;
  valuesArr[4] = inputElems[4].value;
  valuesArr[5] = inputElems[5].value;
  valuesArr[6] = inputElems[6].value;
  valuesArr[7] = inputElems[7].value;
  //Processing
  fnlPct = calcFnlPctg_3(valuesArr);

  //Output
  resultStr = `Your Course Total: <b>${fnlPct}%</b>`;
  document.querySelector("#outputDiv").innerHTML = resultStr;
};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
