/*
  Tagged Template Literals
  ------------------------
  Call a function on a template literal before it becomes a string.
  Used in styled-components, i18n, SQL builders.
*/

const example = `
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`<mark>\${values[i]}</mark>\` : "";
    return result + str + value;
  }, "");
}

const userName = "Subash";
const score = 95;
const html = highlight\`Hello \${userName}, you scored \${score}!\`;
// "Hello <mark>Subash</mark>, you scored <mark>95</mark>!"

// styled-components uses this pattern:
// const Button = styled.button\`
//   color: \${(props) => props.primary ? "blue" : "gray"};
//   padding: 10px;
// \`;
`;

console.log("--- Tagged Templates ---");
console.log("tag`Hello ${name}`  → calls tag(strings, ...values)");
console.log("strings = array of literal parts");
console.log("values  = interpolated expressions");
console.log("Used in: styled-components, i18n libraries");
console.log("");
console.log("Example:\n", example);
