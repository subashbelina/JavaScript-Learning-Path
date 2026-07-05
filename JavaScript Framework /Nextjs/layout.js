/*
  layout.js
  ---------
  Shared UI that wraps pages in a route segment.
  Root layout (app/layout.js) wraps the entire app.
*/

const layoutExample = `
// app/layout.js — Root layout

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>My App</nav>
        </header>

        <main>{children}</main>

        <footer>© 2026 My App</footer>
      </body>
    </html>
  );
}

// app/dashboard/layout.js — Nested layout for /dashboard/*

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <section>{children}</section>
    </div>
  );
}
`;

console.log("--- layout.js ---");
console.log("Wraps child pages with shared UI");
console.log("children = the page or nested layout");
console.log("Root layout must include <html> and <body>");
console.log("");
console.log("Example:\n", layoutExample);
