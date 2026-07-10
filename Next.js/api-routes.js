/*
  API Routes (Route Handlers)
  -----------------------------
  Create backend endpoints with route.js in app/api/.
*/

const apiExample = `
// app/api/users/route.js

export async function GET() {
  const users = [
    { id: 1, name: "Subash" },
    { id: 2, name: "Rai" },
  ];
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  return Response.json({ message: "User created", data: body }, { status: 201 });
}

// Usage from frontend:
// fetch("/api/users")
// fetch("/api/users", { method: "POST", body: JSON.stringify({ name: "Dev" }) })
`;

console.log("--- API Routes ---");
console.log("File: app/api/[name]/route.js");
console.log("Export: GET, POST, PUT, DELETE functions");
console.log("URL: /api/users → app/api/users/route.js");
console.log("Returns: Response.json(data)");
console.log("");
console.log("Example:\n", apiExample);
