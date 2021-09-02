// jshint esversion: 7

//declare the functions

function toHTML(lastName, firstName, email) {
  return `<h2>${lastName},  ${firstName}</h2>\n<p><b>Email address:
  </b><code>${email}</code>\n</p>`;
}

//declare variables

let lastName, firstName, email, lastName2, firstName2, email2;

console.log(toHTML(lastName, firstName, email));
