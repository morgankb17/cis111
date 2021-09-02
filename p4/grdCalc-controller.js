// jshint esversion: 6

//your function goes here
let calcFnlPctg = function(mt, fnl, p1, p2, p3, p4, p5) {
  mt = Number(mt);
  fnl = Number(fnl);
  p1 = Number(p1);
  p2 = Number(p2);
  p3 = Number(p3);
  p4 = Number(p4);
  p5 = Number(p5);
};

let controller = function() {
  let mt, fnl, inputElems, finalPct, resultStr;

  //Input
  //one at a time:
  mt = Number(document.querySelector("#mt").value);
  fnl = Number(document.querySelector("#fnl").value);

  //all at once:
  inputElems = document.querySelectorAll("input[type=text]");

  //Processing

  //Output
  resultStr = resultStr;
};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
