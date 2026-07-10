/*
  Schema Validation
  -----------------
  Check data before saving — reject invalid records early.
*/

function validateUser(data) {
  const errors = [];

  if (!data.name || data.name.trim() === "") {
    errors.push("name is required");
  }

  if (!data.email || !data.email.includes("@")) {
    errors.push("valid email is required");
  }

  if (data.age !== undefined && data.age < 0) {
    errors.push("age must be positive");
  }

  return errors.length ? { ok: false, errors } : { ok: true, data };
}

console.log("--- Schema Validation ---");
console.log("Valid user  →", validateUser({ name: "Subash", email: "s@mail.com", age: 25 }));
console.log("No name     →", validateUser({ email: "s@mail.com" }));
console.log("Bad email   →", validateUser({ name: "Subash", email: "invalid" }));

// In real apps use: Mongoose schema, Zod, or Joi
// const userSchema = new Schema({ name: { type: String, required: true } });
