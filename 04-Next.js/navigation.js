/*
  Navigation
  ----------
  Use Link for client-side navigation.
  Use redirect() or useRouter for programmatic navigation.
*/

const navigationExample = `
import Link from "next/link";
import { redirect } from "next/navigation";

// Link — preferred for internal links
export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/my-post">Blog Post</Link>
    </nav>
  );
}

// redirect — in Server Component or Server Action
export default async function ProfilePage() {
  const session = await getSession();
  if (!session) redirect("/login");
  return <h1>Profile</h1>;
}

// useRouter — in Client Component
"use client";
import { useRouter } from "next/navigation";

function LoginButton() {
  const router = useRouter();
  return <button onClick={() => router.push("/dashboard")}>Go</button>;
}
`;

console.log("--- Navigation ---");
console.log("<Link href='/path'>  — client-side navigation");
console.log("redirect('/path')    — server-side redirect");
console.log("useRouter().push()   — client programmatic nav");
console.log("Import from: next/link, next/navigation");
console.log("");
console.log("Example:\n", navigationExample);
