/*
  JSX Syntax
  ----------
  JSX looks like HTML but it is JavaScript.

  Rules:
    - Use className instead of class
    - Use camelCase: onClick, onChange, htmlFor
    - Put JavaScript inside { curly braces }
    - Return one parent element (or use Fragment <>...</>)
*/

const jsxExample = `
function Greeting() {
  const userName = "Subash";
  const isLearning = true;

  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <p>{isLearning ? "Learning React" : "Expert"}</p>
      <p>2 + 2 = {2 + 2}</p>
      <button className="btn" onClick={() => alert("Hi!")}>
        Click me
      </button>
    </div>
  );
}
`;

console.log("--- JSX Syntax ---");
console.log("JSX = JavaScript + XML (HTML-like syntax)");
console.log("");
console.log("Rules:");
console.log("  class      → className");
console.log("  onclick    → onClick");
console.log("  {variable} → embed JavaScript");
console.log("");
console.log("Example:\n", jsxExample);
