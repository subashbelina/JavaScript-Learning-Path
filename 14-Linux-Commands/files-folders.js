/*
  Files & Folders
  ---------------
  Create, copy, move, and delete files and folders.
*/

const commands = [
  { cmd: "mkdir my-folder",       desc: "Create a new folder" },
  { cmd: "mkdir -p a/b/c",        desc: "Create nested folders" },
  { cmd: "touch file.js",         desc: "Create an empty file" },
  { cmd: "cp file.js backup.js",  desc: "Copy a file" },
  { cmd: "cp -r folder/ copy/",   desc: "Copy a folder recursively" },
  { cmd: "mv old.js new.js",      desc: "Rename or move a file" },
  { cmd: "mv file.js folder/",    desc: "Move file into folder" },
  { cmd: "rm file.js",            desc: "Delete a file (careful!)" },
  { cmd: "rm -rf folder/",        desc: "Delete folder and contents (very careful!)" },
];

console.log("--- Files & Folders ---");
commands.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(26)} → ${desc}`));
console.log("");
console.log("⚠️  rm -rf cannot be undone — double-check the path!");
console.log("");
console.log("Create practice folder:");
console.log("  mkdir practice && cd practice && touch hello.js");
