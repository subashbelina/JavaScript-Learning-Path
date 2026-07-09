/*
  npm Basics
  ----------
  npm (Node Package Manager) installs libraries and runs project scripts.

  Note: Read and learn only. Run these commands in a real project folder.
*/

const npmExample = `
// package.json — project manifest
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My Node.js app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js",
    "test": "node --test"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}

// Common commands:
npm init -y              // create package.json
npm install express      // add dependency → node_modules + package-lock.json
npm install -D nodemon   // dev dependency only
npm uninstall express    // remove package
npm run dev              // run script from "scripts"
npm list --depth=0       // show installed packages
npx create-next-app      // run package without global install
`;

console.log("--- npm Basics ---");
console.log("package.json      — project name, scripts, dependencies");
console.log("node_modules/     — installed packages (don't edit manually)");
console.log("package-lock.json — exact versions for reproducible installs");
console.log("");
console.log("Commands:");
console.log("  npm init -y           create package.json");
console.log("  npm install <pkg>     add dependency");
console.log("  npm install -D <pkg>  add dev dependency");
console.log("  npm run <script>      run script from package.json");
console.log("  npx <command>         run without global install");
console.log("");
console.log("Example:\n", npmExample);
