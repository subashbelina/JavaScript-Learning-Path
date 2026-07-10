/*
  TanStack Query (React Query)
  ----------------------------
  Manages server state: caching, refetching, loading/error UI.
  Use when many components fetch the same API.

  Install: npm install @tanstack/react-query

  Optional — study first in this section, after use-effect.js and a real project.
*/

const tanstackExample = `
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// 1. Wrap app once
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
}

// 2. Fetch with useQuery — caching + loading built in
function TodoList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("/api/todos");
      if (!res.ok) throw new Error("Failed to load todos");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

// 3. Mutations — POST/PUT/DELETE then refresh cache
function AddTodoForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (title) =>
      fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <button onClick={() => mutation.mutate("New todo")}>
      Add todo
    </button>
  );
}
`;

console.log("--- TanStack Query ---");
console.log("Server state ≠ UI state");
console.log("  UI state    → useState / Zustand (theme, modal open)");
console.log("  Server state → TanStack Query (API data, cache)");
console.log("");
console.log("useQuery     → GET + cache + loading/error");
console.log("useMutation  → POST/PUT/DELETE + refresh cache");
console.log("queryKey     → unique cache id (e.g. ['todos'])");
console.log("");
console.log("When to use:");
console.log("  ✓ Same API called from many components");
console.log("  ✓ Need cache, refetch, stale data handling");
console.log("  ✗ Simple one-off fetch → fetch-patterns.js (next file)");
console.log("");
console.log("Example:\n", tanstackExample);
