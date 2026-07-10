/*
  Server Actions
  --------------
  Run server code from forms and client components.
  No need to create a separate API route.
*/

const serverActionsExample = `
// app/actions.js — server-side functions

"use server";

export async function createUser(formData) {
  const userName = formData.get("userName");
  // save to database...
  return { success: true, userName };
}

// app/signup/page.js — use in a form

import { createUser } from "../actions";

export default function SignUpPage() {
  return (
    <form action={createUser}>
      <input name="userName" placeholder="Name" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
`;

console.log("--- Server Actions ---");
console.log('"use server" at top of function or file');
console.log("Call from forms: <form action={serverAction}>");
console.log("Runs on server — safe for database access");
console.log("Alternative to API routes for mutations");
console.log("");
console.log("Example:\n", serverActionsExample);
