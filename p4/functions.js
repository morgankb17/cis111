//jshint esversion: 7

// completed 2/20

//Req. 2-A
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
//Req. 2-B
let calcFnlPctg_2 = function(mt, fnl, xc, p1, p2, p3, p4, p5) {
  mt = Number(mt);
  fnl = Number(fnl);
  xc = Number(xc);
  p1 = Number(p1);
  p2 = Number(p2);
  p3 = Number(p3);
  p4 = Number(p4);
  p5 = Number(p5);
  let pct =
    (((mt + fnl + xc) / 300) * 0.7 + ((p1 + p2 + p3 + p4 + p5) / 500) * 0.3) *
    100;
  return Number(pct.toFixed(2));
};
//Req. 2-C
let calcLtrGrd_XC = function(mt, fnl, xc, p1, p2, p3, p4, p5) {
  mt = Number(mt);
  fnl = Number(fnl);
  xc = Number(xc);
  p1 = Number(p1);
  p2 = Number(p2);
  p3 = Number(p3);
  p4 = Number(p4);
  p5 = Number(p5);
  let pct =
    (((mt + fnl + xc) / 300) * 0.7 + ((p1 + p2 + p3 + p4 + p5) / 500) * 0.3) *
    100;
  if (pct >= 90) {
    return "A";
  } else if (pct >= 80 && pct < 90) {
    return "B";
  } else if (pct >= 70 && pct < 80) {
    return "C";
  } else if (pct >= 60 && pct < 70) {
    return "D";
  } else return "F/NP";
};

//Req. 5-C
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
