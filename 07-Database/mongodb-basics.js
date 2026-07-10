/*
  MongoDB Basics
  --------------
  MongoDB stores data as documents (objects) inside collections.
*/

const usersCollection = [
  { _id: "1", name: "Subash", role: "admin" },
  { _id: "2", name: "Rai", role: "user" },
];

const postsCollection = [
  { _id: "p1", title: "Hello World", authorId: "1" },
  { _id: "p2", title: "Learn Node", authorId: "2" },
];

console.log("--- MongoDB Basics ---");
console.log("Collection: users");
console.log(usersCollection);
console.log("");
console.log("Collection: posts");
console.log(postsCollection);
console.log("");
console.log("Find admin users:", usersCollection.filter((u) => u.role === "admin"));

// Real MongoDB:
// db.users.insertOne({ name: "Subash", role: "admin" });
// db.users.find({ role: "admin" });
