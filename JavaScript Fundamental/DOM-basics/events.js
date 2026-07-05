/*
  DOM Events
  ----------
  Respond to user actions like clicks.
*/

const button = document.getElementById("btn");
const skillList = document.getElementById("skill-list");

button.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = "React";
  skillList.appendChild(item);
  console.log("Button clicked — skill added!");
});

console.log("--- Events ---");
console.log("Click the button to add a skill.");
