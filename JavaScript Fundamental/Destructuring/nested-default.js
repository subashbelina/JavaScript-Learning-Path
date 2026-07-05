/*
  Nested & Default Destructuring
  ------------------------------
  Destructuring with nested objects and default values.
*/

const settings = {
  theme: "dark",
  user: {
    userName: "Subash",
    preferences: {
      notifications: true,
    },
  },
};

const {
  theme = "light",
  user: {
    userName,
    preferences: { notifications = false } = {},
  } = {},
} = settings;

console.log("--- Nested & Default ---");
console.log(theme);
console.log(userName);
console.log(notifications);
