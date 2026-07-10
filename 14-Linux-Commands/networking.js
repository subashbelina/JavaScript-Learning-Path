/*
  Networking Commands
  -----------------
  Test connections and talk to APIs from the terminal.
*/

const commands = [
  { cmd: "curl https://api.github.com",     desc: "Fetch a URL (GET request)" },
  { cmd: "curl -I https://google.com",       desc: "Show response headers only" },
  { cmd: "ping google.com",                 desc: "Test if host is reachable" },
  { cmd: "ssh user@server.com",             desc: "Connect to remote server" },
  { cmd: "scp file.js user@server:/path/",  desc: "Copy file to remote server" },
];

console.log("--- Networking Commands ---");
commands.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(36)} → ${desc}`));
console.log("");
console.log("Developers use curl to test APIs before writing fetch() in code");
console.log("");
console.log("Example:");
console.log('  curl https://api.github.com/users/github');
