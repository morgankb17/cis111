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

//pizza cost function
let getTotalCost = (size, num_of_toppings) => {
  let costs1 = {
    Small: 10,
    Medium: 12,
    Large: 14,
    "Extra-Large": 16,
    Giant: 18
  };
  let costs2 = {
    Mushrooms: 0.5,
    Olives: 0.5,
    Habaneros: 0.5,
    Pepperoni: 0.5,
    Bacon: 0.5,
    Peppers: 0.5
  };
  return "\u0024" + (costs1[size] + costs2[num_of_toppings]).toFixed(2);
};

//call the functions
let controller = function() {
  let resultStr, toppingsArr, pizzaSize, pizzaCost;

  pizzaSize = getSize();
  toppingsArr = getToppings();
  numToppings = toppingsArr.length;
  toppingsStr = toppingsArr.join(" ");
  pizzaCost = getTotalCost();

  for (var i = 0; i < toppingsArr.length; i++) {
    toppings = `${toppingsStr}`;
  }

  //Output: display selection on web page
  resultStr = `
  Size: ${pizzaSize}
  <br>Toppings: ${toppingsStr}
  <br>Total Cost: ${pizzaCost}
  <br>Number of Slices:
  <br>Cost per Slice:`;
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
