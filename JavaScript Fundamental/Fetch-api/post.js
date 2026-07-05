/*
  Fetch API — POST Request
  ------------------------
  Send data to a server.
*/

async function createPost() {
  console.log("--- Fetch POST ---");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Learning JavaScript",
          body: "Fetch API is useful!",
          userId: 1,
        }),
      }
    );

    const newPost = await response.json();
    console.log("Created post:", newPost);
  } catch (error) {
    console.error("POST failed:", error.message);
  }
}

createPost();
