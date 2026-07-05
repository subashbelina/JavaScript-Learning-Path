/*
  useEffect Hook
  --------------
  Runs code AFTER the component renders (side effects).

  Common uses: fetch data, timers, event listeners.

  Syntax:
    useEffect(() => { ... }, [dependencies]);

  Dependency array:
    []           — run once on mount
    [count]      — run when count changes
    no array     — run after every render
*/

const effectExample = `
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // Run once — start timer, cleanup on unmount
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return <p>Seconds: {seconds}</p>;
}

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  // Re-run when userId changes — fetch new user
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then((res) => res.json())
      .then(setUser);
  }, [userId]);

  return user ? <p>{user.name}</p> : <p>Loading...</p>;
}
`;

console.log("--- useEffect ---");
console.log("Side effect = fetch, timer, DOM listener, etc.");
console.log("useEffect(fn, [])     → run once");
console.log("useEffect(fn, [dep])  → run when dep changes");
console.log("return () => {}       → cleanup function");
console.log("");
console.log("Example:\n", effectExample);
