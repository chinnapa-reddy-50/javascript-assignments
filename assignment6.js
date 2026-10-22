// Assignment 6: Arrays, Objects, and Core Methods
const products = [
  { name: "Laptop",   price: 800 },
  { name: "Mouse",    price: 25 },
  { name: "Keyboard", price: 45 }
];

console.log("--- All Products (forEach) ---");
products.forEach(p => console.log(`Item: ${p.name} - Price: $${p.price}`));

console.log("--- Filtered Products (Price < $50) ---");
const cheap = products.filter(p => p.price < 50);
console.log(cheap);

console.log("--- Mapped Product Tags (map) ---");
const tags = products.map(p => `${p.name.toUpperCase()} costs $${p.price}`);
console.log(tags);
