/*
  Data Fetching
  -------------
  Fetch data in Server Components with async/await.
  Next.js extends fetch with caching options.
*/

const dataFetchingExample = `
// Server Component — fetch on every request
async function getPosts() {
  const res = await fetch("https://api.example.com/posts", {
    cache: "no-store",       // always fresh (like SSR)
  });
  return res.json();
}

// Revalidate every 60 seconds (ISR)
async function getProducts() {
  const res = await fetch("https://api.example.com/products", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}
`;

console.log("--- Data Fetching ---");
console.log("Fetch directly in async Server Components");
console.log('cache: "no-store"     → fresh every request');
console.log("next: { revalidate } → regenerate on interval");
console.log("No useEffect needed on the server");
console.log("");
console.log("Example:\n", dataFetchingExample);
