// jshint esversion: 7

//define helper functions here

function pizzaPSI(pizzaCost, pizzaDiam) {
  return "\u0024" + (pizzaCost / (Math.PI * (pizzaDiam / 2) ** 2)).toFixed(2);
}
//define a controller to handle the button click
function controller() {
  let pizzaCost,
    pizzaDiam,
    costPSI,
    divElem,
    result = "";

  //input: prompt the user for cost and Diameter

  //processing: assemble the result string
  costPSI = pizzaPSI(pizzaCost, pizzaDiam);
  result = `Cost of Pizza: ${pizzaCost}
  <br>Diameter: ${pizzaDiam}
  <br>Cost PSI: ${costPSI}`;

  //use <br> in the result string for html newline
  //output: write the result string in the empty div

  divElem = document.querySelector("div");
  divElem.innerHTML = result;
}

//register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
let pizzaCost, pizzaDiam, costPSI, resultStr;

//input:
pizzaCost = Number(prompt("Enter the cost of the pizza"));
pizzaDiam = Number(prompt("Enter the diameter of the pizza"));
costPSI = pizzaPSI(pizzaCost, pizzaDiam);
//processing:

//output:

resultStr = `Cost of Pizza: ${pizzaCost}
Diameter: ${pizzaDiam}
Cost PSI: ${costPSI}`;

console.log(resultStr);
alert(resultStr);
