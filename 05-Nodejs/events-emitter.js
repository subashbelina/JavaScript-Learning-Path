/*
  Events & EventEmitter
  ---------------------
  Node is event-driven. on() listens, emit() fires an event.
*/

const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter.on("user:created", (user) => {
  console.log("User created:", user.name);
});

emitter.once("user:created", () => {
  console.log("(once — only fires for the first user)");
});

console.log("--- EventEmitter ---");

emitter.emit("user:created", { id: 1, name: "Subash" });
emitter.emit("user:created", { id: 2, name: "Rai" });
