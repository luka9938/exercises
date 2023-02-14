"use strict";

const fullName = "pETer";
function capitalize(fullName) {
  return fullName[0].toUpperCase() + fullName.slice(1).toLowerCase();
}
const cap = capitalize(fullName);
console.log(cap);
