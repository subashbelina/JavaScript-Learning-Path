/*
  page.js
  -------
  Defines the UI for a specific route.
  Every route needs a page.js (or page.jsx) file.
*/

const pageExample = `
// app/page.js — Home page (/)

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My App</h1>
      <p>Learn Next.js step by step.</p>
    </main>
  );
}

// app/about/page.js — About page (/about)

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <p>We build web apps with Next.js.</p>
    </main>
  );
}
`;

console.log("--- page.js ---");
console.log("One page.js per route folder");
console.log("Must export default function component");
console.log("File name must be exactly: page.js");
console.log("");
console.log("Example:\n", pageExample);
