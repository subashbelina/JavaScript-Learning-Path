/*
  Objects & Arrays
  ----------------
  Type object properties and array items.
*/

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 */

/** @type {Product[]} */
const products = [
  { id: 1, name: "Keyboard", price: 50 },
  { id: 2, name: "Mouse", price: 25 },
];

const total = products.reduce((sum, item) => sum + item.price, 0);

console.log("--- Objects & Arrays ---");
console.log("products:", products);
console.log("total price:", total);

// TypeScript:
// type Product = { id: number; name: string; price: number };
// const products: Product[] = [...];
