/*
  React Fragments
  ---------------
  Group multiple elements without adding an extra DOM div.

  Syntax:
    <>...</>                        — short syntax
    <React.Fragment>...</React.Fragment>  — full syntax
*/

const fragmentsExample = `
function UserInfo() {
  return (
    <>
      <h2>Subash</h2>
      <p>Developer</p>
      <p>Kathmandu, Nepal</p>
    </>
  );
}

// Without Fragment — extra wrapper div (avoid when not needed)
function UserInfoWithDiv() {
  return (
    <div>
      <h2>Subash</h2>
      <p>Developer</p>
    </div>
  );
}
`;

console.log("--- Fragments ---");
console.log("<>...</> = group elements without extra HTML node");
console.log("Use when you need multiple siblings in return");
console.log("");
console.log("Example:\n", fragmentsExample);
