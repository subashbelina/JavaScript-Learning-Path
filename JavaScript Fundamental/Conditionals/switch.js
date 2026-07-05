/*
  switch Statement
  ----------------
  Choose one of many code blocks to run.
*/

const day = "Monday";

console.log("--- switch ---");

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Regular day.");
}
