/*
  Metadata (SEO)
  --------------
  Set page title, description, and Open Graph tags.
*/

const metadataExample = `
// Static metadata — app/about/page.js

export const metadata = {
  title: "About Us",
  description: "Learn more about our company.",
  openGraph: {
    title: "About Us",
    description: "Learn more about our company.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}

// Dynamic metadata — app/blog/[slug]/page.js

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}
`;

console.log("--- Metadata ---");
console.log("export const metadata = { title, description }");
console.log("generateMetadata() for dynamic pages");
console.log("Improves SEO and social sharing");
console.log("");
console.log("Example:\n", metadataExample);
