/*
  loading.js & error.js
  -----------------------
  Special files for loading states and error boundaries.
*/

const loadingErrorExample = `
// app/dashboard/loading.js — shows while page loads

export default function Loading() {
  return <p>Loading dashboard...</p>;
}

// app/dashboard/error.js — catches errors in this segment

"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

// error.js must be a Client Component ("use client")
`;

console.log("--- loading.js & error.js ---");
console.log("loading.js → automatic loading UI");
console.log("error.js   → error boundary for route segment");
console.log("Place in same folder as page.js");
console.log("");
console.log("Example:\n", loadingErrorExample);
