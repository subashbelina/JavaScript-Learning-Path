/*
  Create & Append Elements
  ------------------------
  Build new elements and add them to the page.
*/

const skillList = document.getElementById("skill-list");

const newItem = document.createElement("li");
newItem.textContent = "JavaScript";
skillList.appendChild(newItem);

const wrapper = document.createElement("div");
wrapper.innerHTML = "<p>Created with createElement()</p>";
document.body.appendChild(wrapper);

console.log("--- Create Elements ---");
console.log("New skill added to list.");
