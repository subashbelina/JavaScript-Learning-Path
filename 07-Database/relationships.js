/*
  Relationships
  -------------
  Link data between tables/collections (user has many posts).
*/

const users = [
  { id: 1, name: "Subash" },
  { id: 2, name: "Rai" },
];

const posts = [
  { id: 101, title: "Hello World", userId: 1 },
  { id: 102, title: "Learn Node", userId: 1 },
  { id: 103, title: "My Blog", userId: 2 },
];

function getUserWithPosts(userId) {
  const user = users.find((u) => u.id === userId);
  const userPosts = posts.filter((p) => p.userId === userId);
  return { ...user, posts: userPosts };
}

console.log("--- Relationships ---");
console.log("User 1 with posts:", getUserWithPosts(1));
console.log("User 2 with posts:", getUserWithPosts(2));
console.log("");
console.log("SQL:       FOREIGN KEY userId REFERENCES users(id)");
console.log("MongoDB:   embed posts[] inside user OR store userId in each post");
