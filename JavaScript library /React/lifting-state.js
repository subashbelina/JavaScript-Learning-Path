/*
  Lifting State Up
  ----------------
  When two sibling components need the same data,
  move the state to their closest common parent.

  Parent holds state → passes value down as props
                    → passes setter function to update
*/

const liftingStateExample = `
import { useState } from "react";

function CelsiusInput({ value, onChange }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}

function FahrenheitDisplay({ celsius }) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return <p>{celsius}°C = {fahrenheit.toFixed(1)}°F</p>;
}

function App() {
  // State lives in parent — shared by both children
  const [celsius, setCelsius] = useState(25);

  return (
    <div>
      <CelsiusInput value={celsius} onChange={setCelsius} />
      <FahrenheitDisplay celsius={celsius} />
    </div>
  );
}
`;

console.log("--- Lifting State Up ---");
console.log("Siblings need same data? Move state to parent.");
console.log("Parent passes: value + onChange/setter as props");
console.log("");
console.log("Example:\n", liftingStateExample);
