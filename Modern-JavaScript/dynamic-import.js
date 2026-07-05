/*
  Dynamic Import — import()
  -------------------------
  Load a module on demand (lazy loading).
  Returns a Promise — use with await or .then().
*/

const example = `
// Static import (loads at start)
import { add } from "./math.js";

// Dynamic import (loads when needed)
async function loadModule() {
  const math = await import("./math.js");
  console.log(math.add(2, 3));
}

// Conditional loading
if (userWantsChart) {
  const { Chart } = await import("./chart.js");
  Chart.render(data);
}

// In React / Next.js — lazy load components
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));
`;

console.log("--- Dynamic Import ---");
console.log("import('./file.js')  → returns Promise");
console.log("Use for: code splitting, lazy loading, conditional modules");
console.log("Smaller initial bundle — load code only when needed");
console.log("");
console.log("Example:\n", example);
