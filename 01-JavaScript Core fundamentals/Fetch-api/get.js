/*
  Fetch API — GET Request
  -----------------------
  Fetch data from a server (run with network access).
*/

async function getPosts() {
  console.log("--- Fetch GET ---");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const posts = await response.json();
    posts.forEach((post) => console.log(`${post.id}: ${post.title}`));
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

getPosts();
