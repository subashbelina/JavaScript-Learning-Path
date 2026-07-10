/*
  API Testing
  -----------
  Test HTTP endpoints return correct status and data.
*/

function testEndpoint(method, path, expectedStatus, expectedBody) {
  const routes = {
    "GET /api/todos": { status: 200, body: [{ id: 1, title: "Test" }] },
    "POST /api/todos": { status: 201, body: { id: 2, title: "New" } },
    "GET /api/missing": { status: 404, body: { error: "Not found" } },
  };

  const key = `${method} ${path}`;
  const response = routes[key];

  const statusOk = response?.status === expectedStatus;
  const bodyOk = JSON.stringify(response?.body) === JSON.stringify(expectedBody);

  console.log(`${statusOk && bodyOk ? "✓" : "✗"} ${method} ${path} → ${expectedStatus}`);
  return statusOk && bodyOk;
}

console.log("--- API Testing ---");
testEndpoint("GET", "/api/todos", 200, [{ id: 1, title: "Test" }]);
testEndpoint("POST", "/api/todos", 201, { id: 2, title: "New" });
testEndpoint("GET", "/api/missing", 404, { error: "Not found" });

// Real tools: supertest, jest + express app
