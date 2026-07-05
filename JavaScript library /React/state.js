/*
  State (useState)
  ----------------
  State lets a component remember and update data.
  When state changes, React re-renders the component.

  Syntax: const [value, setValue] = useState(initialValue);
*/

const stateExample = `
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("Subash");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Hello, {userName}!</p>
    </div>
  );
}
`;

console.log("--- State (useState) ---");
console.log("useState = hook to store changing data");
console.log("[value, setValue] = useState(startValue)");
console.log("Never change state directly — always use setValue()");
console.log("");
console.log("Example:\n", stateExample);
