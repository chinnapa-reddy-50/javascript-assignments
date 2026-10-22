// Assignment 2: Operators, Expressions, and Input Handling
// prompt() always returns a STRING (or null), so we convert explicitly with Number().
let subtotal = Number(prompt("Enter the bill amount ($):", "100"));
let tipPercent = Number(prompt("Enter the tip percentage (%):", "15"));

if (Number.isNaN(subtotal) || Number.isNaN(tipPercent)) {
  console.log("Invalid input: please enter numbers only.");
} else {
  let tip = subtotal * tipPercent / 100; // arithmetic operators
  let total = subtotal;                  // start with the subtotal...
  total += tip;                          // ...assignment operator: total = total + tip

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercent}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}
