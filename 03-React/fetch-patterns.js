/*
  Fetch Patterns in React
  -----------------------
  Loading, error, and success states when calling APIs.
  Uses built-in fetch — no extra library required.

  Optional — study after tanstack-query-intro.js (manual fetch without the library).
*/

const fetchPatternsExample = `
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadUsers() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/users");
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);

        const data = await res.json();
        if (!cancelled) setUsers(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadUsers();
    return () => { cancelled = true; }; // cleanup on unmount
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// POST example
async function createTodo(title) {
  const res = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("Failed to create todo");
  return res.json();
}
`;

console.log("--- Fetch Patterns ---");
console.log("Always handle: loading, error, success");
console.log("Check res.ok before res.json()");
console.log("Cleanup fetch on unmount (cancelled flag)");
console.log("");
console.log("Three states pattern:");
console.log("  loading → show spinner");
console.log("  error   → show message");
console.log("  data    → render list");
console.log("");
console.log("TanStack Query (previous file) automates this pattern.");
console.log("Use fetch directly when the app is small or you want zero dependencies.");
console.log("");
console.log("Example:\n", fetchPatternsExample);
