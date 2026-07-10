/*
  Multiline Template Literals
  ---------------------------
  Create strings across multiple lines easily.
*/

const userName = "Subash";
const skills = ["JavaScript", "HTML", "CSS"];

const profile = `
Name: ${userName}
Skills:
${skills.map((skill) => `- ${skill}`).join("\n")}
Status: ${skills.length >= 3 ? "Skilled" : "Learning"}
`;

console.log("--- Multiline Templates ---");
console.log(profile);
