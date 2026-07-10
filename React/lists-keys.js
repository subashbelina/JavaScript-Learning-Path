/*
  Lists & Keys
  ------------
  Use .map() to render a list in JSX.
  Every list item needs a unique "key" prop.
*/

const listsExample = `
const skills = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React" },
];

function SkillList() {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>{skill.name}</li>
      ))}
    </ul>
  );
}
`;

console.log("--- Lists & Keys ---");
console.log("Use .map() to render arrays in JSX");
console.log("Always add key={uniqueId} — helps React track items");
console.log("Use id from data, NOT array index (when list can change)");
console.log("");
console.log("Example:\n", listsExample);
