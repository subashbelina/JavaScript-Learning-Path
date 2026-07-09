/*
  Events & EventEmitter
  ---------------------
  Node.js is event-driven. EventEmitter is the core pattern for pub/sub.

  Syntax:
    - emitter.on("event", handler)   — listen
    - emitter.emit("event", data)    — fire event
    - emitter.once("event", handler) — listen once
    - emitter.off("event", handler)  — remove listener

  Note: Read and learn only. Many Node APIs (streams, servers) extend EventEmitter.
*/

const { EventEmitter } = require("events");

class UserService extends EventEmitter {
  createUser(name) {
    const user = { id: Date.now(), name };
    this.emit("user:created", user);
    return user;
  }
}

const service = new UserService();

service.on("user:created", (user) => {
  console.log("New user:", user.name);
});

service.once("user:created", () => {
  console.log("(This runs only for the first user)");
});

console.log("--- EventEmitter ---");
console.log("extends EventEmitter  — custom event classes");
console.log('emitter.on("event", fn)   — subscribe');
console.log('emitter.emit("event", data) — publish');
console.log('emitter.once("event", fn)  — one-time listener');

service.createUser("Subash");
service.createUser("Rai");

const eventsExample = `
const { EventEmitter } = require("events");
const emitter = new EventEmitter();

emitter.on("data", (payload) => console.log(payload));
emitter.emit("data", { message: "Hello" });

// Built-in: process emits events
process.on("exit", (code) => console.log("Exit code:", code));
`;

console.log("");
console.log("Example:\n", eventsExample);
