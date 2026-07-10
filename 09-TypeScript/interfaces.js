/*
  Interfaces
  ----------
  Define the shape of an object — what properties it must have.
*/

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {string} [role] - optional
 */

/** @type {User} */
const user = {
  id: 1,
  name: "Subash",
  email: "subash@mail.com",
};

/** @type {User} */
const admin = {
  id: 2,
  name: "Rai",
  email: "rai@mail.com",
  role: "admin",
};

console.log("--- Interfaces ---");
console.log("user:", user);
console.log("admin:", admin);

// TypeScript:
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role?: string;
// }
