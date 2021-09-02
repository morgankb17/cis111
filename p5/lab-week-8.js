// jshint esversion: 6

//define event handler
let main = function() {
  //dispatch on button id

  if (this.id == "btn1") {
    //handle button 1 here
    let ol = document.createElement("ol");
    let div = document.querySelector("div");
    div.appendChild(ol);
  } else if (this.id == "btn2") {
    //handle button 2
    //find the existing ordered list
    let li = document.createElement("li");
    //create a new list item
    let ol = document.querySelector("ol");
    // find the text input
    let input = document.querySelector("input");
    //assign the value of the text input to the list item
    li.textContent = input.value;
    //add the list item to the ordered list
    ol.appendChild(li);
  } else if (this.id == "btn3") {
    //handle button 3
    //find the existing ordered list
    let ol = document.createElement("ol");
    // get last child of ordered list
    let lastChild = ol.lastChild;
    //remove child
    ol.removeChild(lastChild);
  } else if (this.id == "btn4") {
    //handle button 4
    //find the existing ordered list
    let ol = document.createElement("ol");
    // get last child of ordered list
    let input = document.querySelector("input");

    let attributeValue = input.value;

    ol.setAttribute("type", attributeValue);
  }
};

//register event handler
window.addEventListener("load", function() {
  let buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i)
    //when the button gets clicked, who ya gonna call?
    buttons[i].addEventListener("click", main);
});
