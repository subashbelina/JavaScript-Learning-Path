/*
  Node.js with TypeScript
  -----------------------
  Type Express request, response, and database models.
*/

const nodeTsExample = `
import express, { Request, Response } from "express";

interface User {
  id: number;
  name: string;
  email: string;
}

const app = express();
app.use(express.json());

app.get("/api/users", (req: Request, res: Response) => {
  const users: User[] = [{ id: 1, name: "Subash", email: "s@mail.com" }];
  res.json(users);
});

app.post("/api/users", (req: Request, res: Response) => {
  const body = req.body as { name: string; email: string };
  res.status(201).json({ id: 2, ...body });
});
`;

console.log("--- Node.js with TypeScript ---");
console.log("Request, Response  →  typed Express handlers");
console.log("interface User     →  typed database records");
console.log("");
console.log("Setup: npm install typescript @types/express @types/node");
console.log("       npx tsc --init");
console.log("");
console.log("Example:\n", nodeTsExample);
