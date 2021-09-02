// jshint esversion: 6

//your function goes here
let getSize = () => {
  let radioElems, pizzaSize;
  //fetch all the radio buttons
  radioElems = document.querySelectorAll("input[type=radio]");

  //which button is selected?
  for (let i = 0; i < radioElems.length; i++) {
    if (radioElems[i].checked) {
      pizzaSize = radioElems[i].value;
    }
  }
  return pizzaSize;
};

let controller = function() {
  let resultStr, pizzaSize;

  pizzaSize = getSize();

  //Output: display selection on web page
  resultStr = `You ordered a ${pizzaSize} pizza.`;
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
