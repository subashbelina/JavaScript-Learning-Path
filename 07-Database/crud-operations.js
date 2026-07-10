/*
  CRUD with Database
  ------------------
  Same CRUD pattern as Express REST API, but data goes to a database.
*/

let collection = [];

const UserDB = {
  async create(data) {
    const doc = { _id: String(collection.length + 1), ...data };
    collection.push(doc);
    return doc;
  },

  async findAll() {
    return collection;
  },

  async findById(id) {
    return collection.find((doc) => doc._id === id) || null;
  },

  async update(id, data) {
    const doc = collection.find((d) => d._id === id);
    if (!doc) return null;
    Object.assign(doc, data);
    return doc;
  },

  async remove(id) {
    collection = collection.filter((d) => d._id !== id);
    return true;
  },
};

async function demo() {
  console.log("--- CRUD with Database ---");
  await UserDB.create({ name: "Subash", role: "admin" });
  await UserDB.create({ name: "Rai", role: "user" });
  console.log("CREATE →", await UserDB.findAll());
  console.log("READ   →", await UserDB.findById("1"));
  console.log("UPDATE →", await UserDB.update("2", { name: "Rai Updated" }));
  await UserDB.remove("1");
  console.log("DELETE →", await UserDB.findAll());
}

demo();
