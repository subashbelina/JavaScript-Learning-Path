/*
  URL Module
  ----------
  Parse and build URLs. Prefer URL over manual string splitting.
*/

const { URL } = require("url");

const api = new URL("https://api.github.com/repos/nodejs/node/issues?state=open&page=1");

console.log("--- URL Module ---");
console.log("protocol:", api.protocol);       // https:
console.log("hostname:", api.hostname);       // api.github.com
console.log("pathname:", api.pathname);       // /repos/nodejs/node/issues
console.log("state:", api.searchParams.get("state"));   // open
console.log("page:", api.searchParams.get("page"));     // 1

api.searchParams.set("per_page", "10");
console.log("updated search:", api.search);
