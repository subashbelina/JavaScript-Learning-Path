/*
  Client Components
  -----------------
  Add "use client" at the top for interactivity.
  Needed for: useState, useEffect, onClick, browser APIs.
*/

const clientExample = `
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// Use in a Server Component page:
// import Counter from "./Counter";
// export default function Page() {
//   return <Counter />;
// }
`;

console.log("--- Client Components ---");
console.log('Add "use client" at top of file');
console.log("Use when you need: state, effects, events");
console.log("Import client components into server components");
console.log("");
console.log("Example:\n", clientExample);
