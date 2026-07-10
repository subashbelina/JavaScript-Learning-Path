/*
  Functional Components
  ---------------------
  A component is a function that returns JSX.
  Component names MUST start with a capital letter.
*/

const componentExample = `
// Small reusable component
function Welcome({ userName }) {
  return <p>Welcome, {userName}!</p>;
}

// Component using another component
function ProfileCard() {
  return (
    <div className="card">
      <h3>Profile Card</h3>
      <Welcome userName="Subash" />
      <Welcome userName="Rai" />
    </div>
  );
}

// Use it inside App
function App() {
  return <ProfileCard />;
}
`;

console.log("--- Components ---");
console.log("A component = function that returns JSX");
console.log("Name must start with Capital letter: Welcome, App, UserCard");
console.log("");
console.log("Example:\n", componentExample);
