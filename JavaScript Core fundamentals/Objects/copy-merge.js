/*
  Object.assign()
  ---------------
  Copy or merge object properties (see Spread-rest folder for ... syntax).
*/

const defaults = { theme: "dark", lang: "en" };
const userSettings = { lang: "ne", fontSize: 16 };

const merged = Object.assign({}, defaults, userSettings);

console.log("--- Object.assign ---");
console.log(merged);
