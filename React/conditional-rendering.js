/*
  Conditional Rendering
  -------------------
  Show different UI based on a condition.

  Three common ways:
    1. if / else before return
    2. Ternary: condition ? trueUI : falseUI
    3. && operator: condition && <Component />
*/

const conditionalExample = `
function LoginStatus({ isLoggedIn }) {
  // Way 1: if / else
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  }
  return <p>Please log in.</p>;
}

function Grade({ score }) {
  return (
    <div>
      {/* Way 2: ternary */}
      <p>{score >= 60 ? "Passed" : "Failed"}</p>

      {/* Way 3: && — show only when true */}
      {score >= 90 && <p>Excellent work!</p>}
    </div>
  );
}
`;

console.log("--- Conditional Rendering ---");
console.log("1. if / else");
console.log("2. condition ? <A /> : <B />");
console.log("3. condition && <Component />");
console.log("");
console.log("Example:\n", conditionalExample);
