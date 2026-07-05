/*
  Event Handling
  --------------
  React uses camelCase event names.
  Pass a function reference — do NOT call it with ().
*/

const eventsExample = `
import { useState } from "react";

function EventsDemo() {
  const [message, setMessage] = useState("Click a button");

  function handleClick() {
    setMessage("Button clicked!");
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload on form submit
    setMessage("Form submitted!");
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click</button>
      <button onDoubleClick={() => setMessage("Double click!")}>
        Double Click
      </button>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
`;

console.log("--- Events ---");
console.log("onclick  → onClick");
console.log("onchange → onChange");
console.log("onsubmit → onSubmit");
console.log("Correct:   onClick={handleClick}");
console.log("Wrong:     onClick={handleClick()}  ← calls immediately");
console.log("");
console.log("Example:\n", eventsExample);
