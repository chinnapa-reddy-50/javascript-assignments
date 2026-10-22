// Assignment 3: Conditional Logic Implementation
const score = Number(prompt("Enter your test score (0-100):", "85"));

if (Number.isNaN(score) || score < 0 || score > 100) {
  // if...else: validate the input first
  console.log("Invalid score. Please enter a number between 0 and 100.");
} else {
  // switch(true) lets each case hold a condition, so ranges work
  let grade;
  switch (true) {
    case score >= 90: grade = "A"; break;
    case score >= 80: grade = "B"; break;
    case score >= 70: grade = "C"; break;
    case score >= 60: grade = "D"; break;
    default:          grade = "F";
  }

  // ternary operator: condition ? valueIfTrue : valueIfFalse
  const status = score >= 60 ? "Passed" : "Failed";

  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}
