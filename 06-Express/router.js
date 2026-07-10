/*
  Express Router
  --------------
  Split routes into separate files with express.Router().
  Mount with app.use("/api/users", userRouter).
*/

const userRoutes = [
  { method: "GET", path: "/", action: "list all users" },
  { method: "GET", path: "/:id", action: "get one user" },
  { method: "POST", path: "/", action: "create user" },
];

const postRoutes = [
  { method: "GET", path: "/", action: "list all posts" },
  { method: "GET", path: "/:id", action: "get one post" },
];

function mountRouter(basePath, routes) {
  routes.forEach((route) => {
    console.log(`${route.method.padEnd(6)} ${basePath}${route.path} → ${route.action}`);
  });
}

console.log("--- Express Router ---");
mountRouter("/api/users", userRoutes);
mountRouter("/api/posts", postRoutes);

// Express syntax:
// const userRouter = express.Router();
// userRouter.get("/", listUsers);
// userRouter.get("/:id", getUser);
// app.use("/api/users", userRouter);
