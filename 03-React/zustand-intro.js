/*
  Zustand — Simple Global State
  -----------------------------
  Small library for shared state without boilerplate.
  Good step up from Context for cart, auth, UI flags, etc.

  Install in a real project: npm install zustand

  Optional — study after when-to-use-state-library.js.
*/

const zustandExample = `
import { create } from "zustand";

// 1. Create a store (outside components)
const useCartStore = create((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => ({ items: [...state.items, product] })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
}));

// 2. Use in any component — no Provider needed
function CartButton() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button onClick={() => addItem({ id: 1, name: "T-shirt" })}>
      Add to cart
    </button>
  );
}

function CartCount() {
  const count = useCartStore((state) => state.items.length);
  return <span>Cart: {count}</span>;
}
`;

console.log("--- Zustand ---");
console.log("create(store)  → define global state + actions");
console.log("useStore(selector) → read only what you need");
console.log("No Provider wrapper required");
console.log("");
console.log("vs Context:");
console.log("  Zustand  → less boilerplate, pick slices of state");
console.log("  Context  → built-in, fine for theme / simple auth");
console.log("");
console.log("Example:\n", zustandExample);
