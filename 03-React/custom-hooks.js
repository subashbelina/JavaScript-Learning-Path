/*
  Custom Hooks
  ------------
  Reusable logic in a function that starts with "use".
  Extract shared stateful logic from components.
*/

const customHooksExample = `
import { useState } from "react";

// Custom hook — reusable counter logic
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(initial);
  }

  return { count, increment, decrement, reset };
}

// Use the custom hook in any component
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
`;

console.log("--- Custom Hooks ---");
console.log("Rule: hook name must start with 'use'");
console.log("Extract repeated logic into reusable functions");
console.log("");
console.log("Example:\n", customHooksExample);
