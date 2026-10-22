// Assignment 5: Function Architecture and Scope

// Standard (regular) function with default parameters
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

// Scope demonstration
{
  let blockVar = "I only exist inside this block";
  var leaksOut = "var ignores block scope";   // var is NOT block scoped
}
console.log(leaksOut);                         // works: var leaks out of the block

try {
  console.log(blockVar);                       // let is block scoped -> error
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}

function localScopeDemo() {
  const secret = "function-scoped";
  return secret;
}
localScopeDemo();
try {
  console.log(secret);                         // secret lives only inside the function
} catch (error) {
  console.log(`Function Scope Error: ${error.name}: ${error.message}`);
}
