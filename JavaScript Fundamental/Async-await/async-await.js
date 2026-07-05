/*
  async / await
  -------------
  Cleaner way to work with Promises.
*/

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, userName: "Subash" }), 500);
  });
}

async function showUser() {
  console.log("--- async / await ---");
  console.log("Loading user...");

  const user = await fetchUser();
  console.log(user);
}

showUser();
