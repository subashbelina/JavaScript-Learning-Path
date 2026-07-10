/*
  Production Environment
  ----------------------
  Production uses different settings than development.
*/

const env = {
  development: {
    NODE_ENV: "development",
    PORT: 3000,
    DATABASE_URL: "mongodb://localhost:27017/todo-dev",
    LOG_LEVEL: "debug",
  },
  production: {
    NODE_ENV: "production",
    PORT: process.env.PORT || 8080,
    DATABASE_URL: process.env.DATABASE_URL || "(set on hosting platform)",
    LOG_LEVEL: "error",
  },
};

console.log("--- Production Environment ---");
console.log("Development:", env.development);
console.log("");
console.log("Production:", env.production);
console.log("");
console.log("Never use development secrets in production!");
