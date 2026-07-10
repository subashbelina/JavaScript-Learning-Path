/*
  Pull Requests (PR)
  ------------------
  Propose merging your branch into main — used for code review.
*/

const prFlow = [
  "1. Create branch:     git checkout -b feature/todo-ui",
  "2. Make changes and commit",
  "3. Push branch:       git push -u origin feature/todo-ui",
  "4. Open Pull Request on GitHub",
  "5. Teammate reviews your code",
  "6. Merge PR into main",
  "7. Delete feature branch",
];

console.log("--- Pull Requests ---");
prFlow.forEach((step) => console.log(step));
console.log("");
console.log("PR = 'Please merge my changes into main'");
