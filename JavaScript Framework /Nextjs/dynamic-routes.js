/*
  Dynamic Routes
  --------------
  Use brackets for dynamic URL segments.
  Access values via params prop.
*/

const dynamicExample = `
// app/products/[id]/page.js → /products/1, /products/abc

export default function ProductPage({ params }) {
  return <h1>Product ID: {params.id}</h1>;
}

// app/blog/[...slug]/page.js → /blog/a, /blog/a/b/c

export default function BlogPage({ params }) {
  return <p>Slug parts: {params.slug.join("/")}</p>;
}

// Async params (Next.js 15+)
export default async function Page({ params }) {
  const { id } = await params;
  return <h1>ID: {id}</h1>;
}
`;

console.log("--- Dynamic Routes ---");
console.log("[id]       → one dynamic segment");
console.log("[...slug]  → catch-all (array of parts)");
console.log("[[...slug]] → optional catch-all");
console.log("Access via: params.id or params.slug");
console.log("");
console.log("Example:\n", dynamicExample);
