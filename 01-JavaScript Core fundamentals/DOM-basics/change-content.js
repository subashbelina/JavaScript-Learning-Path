/*
  Change DOM Content & Styles
  ---------------------------
  Update text, HTML, classes, and attributes.
*/

const title = document.getElementById("title");
const intro = document.querySelector(".intro");

title.textContent = "DOM Basics — Updated";
intro.innerHTML = "Now we can <strong>change</strong> the page!";
intro.classList.add("highlight");
title.setAttribute("data-level", "beginner");

console.log("--- Change Content ---");
console.log("Title updated:", title.textContent);
