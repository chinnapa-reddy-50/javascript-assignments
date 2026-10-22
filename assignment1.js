// Assignment 1: Variables, Data Types, and Console Operations
var name = "Alice";                          // var   -> function-scoped, can be re-declared
let age = 25;                                // let   -> block-scoped, can be reassigned
const isEmployed = true;                     // const -> block-scoped, cannot be reassigned
const skills = ["HTML", "CSS", "JavaScript"]; // arrays are objects in JavaScript

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`);
