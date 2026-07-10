/*
  Database in Production
  ----------------------
  Use a cloud database — not localhost.
*/

const options = [
  { name: "MongoDB Atlas", url: "mongodb+srv://user:pass@cluster.mongodb.net/mydb", free: true },
  { name: "Supabase", url: "PostgreSQL hosted", free: true },
  { name: "PlanetScale", url: "MySQL hosted", free: true },
];

console.log("--- Database in Production ---");
options.forEach((db) => {
  console.log(`${db.name} (free tier: ${db.free})`);
  console.log(`  → ${db.url}`);
});
console.log("");
console.log("Set DATABASE_URL in your hosting platform env vars");
console.log("Never commit connection strings to GitHub!");
