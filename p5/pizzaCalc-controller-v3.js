// jshint esversion: 6

//list of toppings function
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

//pizza size function
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

//call the functions
let controller = function() {
  let resultStr, toppingsArr, pizzaSize;

  pizzaSize = getSize();
  toppingsArr = getToppings();
  numToppings = toppingsArr.length;
  toppingsStr = toppingsArr.join(" ");

  for (var i = 0; i < toppingsArr.length; i++) {
    toppings = `${toppingsStr}`;
  }

  //Output: display selection on web page
  resultStr = `You ordered a ${pizzaSize} pizza, with the following ingredients: ${toppingsStr}.`;
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
