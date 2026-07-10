/*
  React with TypeScript
  ---------------------
  Type props and state in React components.
*/

const reactTsExample = `
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState<number>(0);
  return <p>Count: {count}</p>;
}
`;

console.log("--- React with TypeScript ---");
console.log("Props interface  →  define what a component accepts");
console.log("useState<number> →  type the state value");
console.log("");
console.log("Example:\n", reactTsExample);
