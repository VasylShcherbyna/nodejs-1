const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

// const filePath = `${__dirname}\contacts.json`;
const filePath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(filePath);
  const list = JSON.parse(data);
  return list;
};

const getById = async (id) => {
  const list = await listContacts();
  const result = list.find((item) => item.id === id);
  if (!result) {
    return null;
  }
  return result;
};

const add = async (name, email, phone) => {
  const data = { name, email, phone, id: v4() };
  const list = await listContacts();
  list.push(data);
  await fs.writeFile(filePath, JSON.stringify(list, null, 2));
  return data;
};

const remove = async (id) => {
  const list = await listContacts();
  const idx = list.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const deleteList = list[idx];
  list.splice(idx, 1);
  await fs.writeFile(filePath, JSON.stringify(list, null, 2));
  return deleteList;
};

module.exports = {
  listContacts,
  getById,
  add,
  remove,
};

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

// console.log("Welkom еoo hell");

// const users = require("./users");
// console.log(users);

// const { admins } = require("./users");
// console.log(admins)

// const contacts = require("./db/contacts.json"):
// console.log();
