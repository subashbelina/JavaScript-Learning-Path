/*
  npm Basics
  ----------
  npm installs packages and manages project scripts via package.json.
*/

const packageJson = {
  name: "my-app",
  version: "1.0.0",
  main: "index.js",
  scripts: {
    start: "node index.js",
    dev: "node --watch index.js",
  },
  dependencies: {
    express: "^4.18.0",
  },
  devDependencies: {
    nodemon: "^3.0.0",
  },
};

console.log("--- npm Basics ---");
console.log("Project name:", packageJson.name);
console.log("Start script:", packageJson.scripts.start);
console.log("Dependencies:", Object.keys(packageJson.dependencies));
console.log("");
console.log("npm init -y          → create package.json");
console.log("npm install express  → add a package");
console.log("npm run dev          → run a script");
