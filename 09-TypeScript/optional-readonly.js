/*
  Optional & Readonly
  -------------------
  ? makes a property optional. readonly prevents reassignment.
*/

/**
 * @typedef {Object} Config
 * @property {string} host
 * @property {number} port
 * @property {boolean} [ssl] - optional
 */

/** @type {Config} */
const config = {
  host: "localhost",
  port: 3000,
};

console.log("--- Optional & Readonly ---");
console.log("config:", config);
console.log("ssl (optional):", config.ssl ?? false);

// TypeScript:
// interface Config {
//   host: string;
//   port: number;
//   ssl?: boolean;
// }
// const config: Readonly<Config> = { host: "localhost", port: 3000 };
