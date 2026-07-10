/*
  Todo React UI
  -------------
  Frontend fetches todos from the API (from folder 03 + 06).
*/

async function fetchTodos() {
  return [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Connect to API", completed: false },
  ];
}

async function addTodo(title) {
  return { id: 3, title, completed: false };
}

async function demo() {
  console.log("--- Todo React UI ---");

  const todos = await fetchTodos();
  console.log("Loaded:", todos);

  const newTodo = await addTodo("Ship project");
  console.log("Added:", newTodo);
  console.log("All todos:", [...todos, newTodo]);
}

demo();

// Real React:
// useEffect(() => { fetch("/api/todos").then(r => r.json()).then(setTodos); }, []);
// const add = () => fetch("/api/todos", { method: "POST", body: JSON.stringify({ title }) });
