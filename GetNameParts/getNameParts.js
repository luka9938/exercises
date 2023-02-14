"use strict";

const fullName = "pETer jOhn smiTh";
const nameParts = getNameParts(fullName);
console.log(nameParts);

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function getNameParts(fullName) {
  const nameParts = fullName.split(" ");
  const firstName = capitalize(nameParts[0]);
  const lastName = capitalize(nameParts[nameParts.length - 1]);
  let middleName = null;
  if (nameParts.length > 2) {
    middleName = nameParts
      .slice(1, nameParts.length - 1)
      .map(capitalize)
      .join(" ");
  }
  return { firstName, middleName, lastName };
}
