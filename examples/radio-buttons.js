// jshint esversion: 6

//1. One Ring to Rule Them All
let controller = function() {
  let pizzaSize, radioElems, resultStr;

  //fetch all the radio buttons
  radioElems = document.querySelectorAll("input[type=radio]");

  //which button was selected?
  if (radioElems[0].checked) {
    pizzaSize = radioElems[0].value;
    //console.log(pizzaSize);
  } else if (radioElems[1].checked) {
    pizzaSize = radioElems[1].value;
    //console.log(pizzaSize);
  } else if (radioElems[2].checked) {
    pizzaSize = radioElems[2].value;
    //console.log(pizzaSize);
  }

      /* A loop also works, although only one button can be selected
      //which button is selected?
      for (let i = 0; i < radioElems.length; i++) {
        if(radioElems[i].checked){
          pizzaSize = radioElems[i].value;
        }
      }
      */

  //display selection on web page
  resultStr = `You ordered a ${pizzaSize} pizza.`
  document.querySelector("div").textContent = resultStr;
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
