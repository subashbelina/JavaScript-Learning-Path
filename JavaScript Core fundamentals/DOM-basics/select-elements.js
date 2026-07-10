/*
  Select DOM Elements
  -------------------
  Open DOM-basics/index.html in a browser to see results.
*/

const title = document.getElementById("title");
const intro = document.querySelector(".intro");
const allListItems = document.querySelectorAll("#skill-list li");

console.log("--- Select Elements ---");
console.log(title);
console.log(intro.textContent);
console.log(`Found ${allListItems.length} list items`);
