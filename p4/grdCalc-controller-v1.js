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
  let pct =
    (((mt + fnl) / 300) * 0.7 + ((p1 + p2 + p3 + p4 + p5) / 500) * 0.3) * 100;
  return Number(pct.toFixed(2));
};

let controller = function() {
  let mt, fnl, inputElems, finalPct, resultStr;

  //Input
  //one at a time:
  mt = Number(document.querySelector("#mt").value);
  fnl = Number(document.querySelector("#fnl").value);
  p1 = Number(document.querySelector("#p1").value);
  p2 = Number(document.querySelector("#p2").value);
  p3 = Number(document.querySelector("#p3").value);
  p4 = Number(document.querySelector("#p4").value);
  p5 = Number(document.querySelector("#p5").value);

  //all at once:
  inputElems = document.querySelectorAll("input[type=text]");

  console.log(inputElems[0].value);

  //Processing
  fnlPct = calcFnlPctg(
    mt,
    fnl,
    inputElems[2].value,
    inputElems[3].value,
    inputElems[4].value,
    inputElems[5].value,
    document.querySelectorAll("input[type=text]")[6].value
  );

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
