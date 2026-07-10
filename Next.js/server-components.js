/*
  Server Components (default)
  ---------------------------
  Components render on the server by default in App Router.
  Can fetch data directly — no useEffect needed.
  Cannot use useState, useEffect, or browser APIs.
*/

const serverExample = `
// app/users/page.js — Server Component (default)

async function getUsers() {
  const res = await fetch("https://api.example.com/users");
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
`;

console.log("--- Server Components ---");
console.log("Default in App Router — no extra keyword needed");
console.log("Can use: async/await, fetch, read database");
console.log("Cannot use: useState, useEffect, onClick");
console.log("Runs on server → smaller JavaScript sent to browser");
console.log("");
console.log("Example:\n", serverExample);
