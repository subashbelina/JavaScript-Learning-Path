/*
  Object.keys(), values(), entries()
  ----------------------------------
  Useful methods to loop over object data.
*/

const product = {
  id: 101,
  title: "Laptop",
  price: 85000,
  inStock: true,
};

console.log("--- keys / values / entries ---");
console.log(Object.keys(product));    // ["id", "title", "price", "inStock"]
console.log(Object.values(product));  // [101, "Laptop", 85000, true]
console.log(Object.entries(product)); // array of [key, value] pairs

Object.entries(product).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
