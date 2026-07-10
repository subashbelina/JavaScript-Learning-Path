/*
  Props
  -----
  Props pass data from parent to child component.
  Props are read-only — the child cannot change them.
*/

const propsExample = `
// Child component — receives props
function UserCard({ userName, role, age }) {
  return (
    <div className="card">
      <h3>{userName}</h3>
      <p>Role: {role}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Parent passes props
function App() {
  return (
    <>
      <UserCard userName="Subash" role="Developer" age={25} />
      <UserCard userName="Rai" role="Designer" age={28} />
    </>
  );
}
`;

console.log("--- Props ---");
console.log("Props = data passed from parent to child");
console.log("Strings: userName=\"Subash\"");
console.log("Numbers/vars: age={25}");
console.log("Props are READ-ONLY");
console.log("");
console.log("Example:\n", propsExample);
