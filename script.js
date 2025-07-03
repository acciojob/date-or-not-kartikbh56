function isDate(input) {
  // Case 1: Check if input is a valid Date object
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // Case 2: Try to parse string or number input
  if (typeof input === "string" || typeof input === "number") {
    const date = new Date(input);
    return !isNaN(date);
  }

  // All other cases
  return false;
}


// Do not change the code below.
// const input = prompt("Enter Date.");
// alert(isDate(input));
