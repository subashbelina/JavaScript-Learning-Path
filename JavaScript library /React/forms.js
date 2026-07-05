/*
  Forms & Controlled Components
  -----------------------------
  Input value is controlled by React state.
  User types → onChange updates state → React updates input.
*/

const formsExample = `
import { useState } from "react";

function SignUpForm() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    role: "developer",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="userName"
        value={form.userName}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
`;

console.log("--- Forms ---");
console.log("Controlled input: value={state} + onChange={handler}");
console.log("Always use e.preventDefault() in onSubmit");
console.log("");
console.log("Example:\n", formsExample);
