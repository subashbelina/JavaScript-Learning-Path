/*
  Context (useContext)
  --------------------
  Share data across many components without passing props
  through every level (avoid "prop drilling").

  Steps:
    1. createContext()
    2. Provider wraps components
    3. useContext() to read the value
*/

const contextExample = `
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Theme: {theme}</button>;
}

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
`;

console.log("--- Context ---");
console.log("Use when many components need the same data");
console.log("createContext → Provider → useContext");
console.log("");
console.log("Example:\n", contextExample);
