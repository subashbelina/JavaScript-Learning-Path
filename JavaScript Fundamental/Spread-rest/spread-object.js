/*
  Spread in Objects
  -----------------
  Copy or merge object properties.
*/

const defaults = { theme: "dark", lang: "en" };
const userPrefs = { lang: "ne", fontSize: 14 };

const settings = { ...defaults, ...userPrefs, sidebar: true };

console.log("--- Spread in Objects ---");
console.log(settings);
