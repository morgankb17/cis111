// jshint esversion: 6

//1. One Ring to Rule Them All
let getToppings = () => {
  let toppingsArr = [],
    toppings = "",
    checkboxes;

  //fetch all the radio buttons
  checkboxes = document.querySelectorAll("input[type=checkbox]");

  //which boxes were checked?
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      toppingsArr.push(checkboxes[i].value);
    }
  }
  return toppingsArr;
  console.log(toppingsArr);
};

let controller = function() {
  let resultStr, toppingsArr;

  toppingsArr = getToppings();
  numToppings = toppingsArr.length;
  toppingsStr = toppingsArr.join(" ");

  //display selected toppings on web page

  for (var i = 0; i < toppingsArr.length; i++) {
    toppings = `${toppingsStr}`;
  }
  resultStr = `You ordered ${toppings}.`;
  document.querySelector("#outputDiv").innerHTML = resultStr;
};

//2. register the onclick handlers after the DOM is complete
window.addEventListener("load", function() {
  //select the buttons
  var buttons = document.querySelectorAll("button");

  //register the same handler for each button
  for (var i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", controller);
  }
});
