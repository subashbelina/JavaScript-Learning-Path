/*
  Next.js Built-in Components
  ---------------------------
  Optimized components from next/image and next/link.
*/

const builtInExample = `
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Optimized images — lazy load, resize, WebP */}
      <Image
        src="/hero.jpg"
        alt="Hero banner"
        width={800}
        height={400}
        priority
      />

      {/* Client-side navigation — no full page reload */}
      <Link href="/about">About Us</Link>
    </main>
  );
}

// Static files go in public/
// /hero.jpg → public/hero.jpg
`;

console.log("--- Built-in Components ---");
console.log("<Image />  — optimized images (next/image)");
console.log("<Link />   — fast client navigation (next/link)");
console.log("public/    — static files served at /");
console.log("Always add alt text to Image");
console.log("");
console.log("Example:\n", builtInExample);
