const contactsPath = require("./db/contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const list = await contactsPath.listContacts();
        console.table(list);
      break;
    case "getById":
      const listId = await contactsPath.getById(id);
        console.log(listId);
      break;
    case "add":
      const arr = await contactsPath.add(name, email, phone);
      console.log(arr);
      break;
    case "remove":
      const removeList = await contactsPath.remove(id);
      console.log(remove);
      break;
    default:
      console.log("Unknown command");
      break;
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

invokeAction({ action: "listContacts" });
invokeAction({ action: "getById", id: "5" });
invokeAction({ action: "add", name: "Mango", email: "mango@gmail.com", phone: "322-22-22" });
invokeAction({ action: "remove", id: "3" });

// const contactsPath = async (filePath, action, data) => {
//   switch (action) {
//     case "read":
//       const result = await fs.readFile(filePath, "utf-8");
//       console.log(result);
//       // const result = await fs.readFile(filePath);
//       // const text = result.toString();
//       // console.log(text);
//       break;
//     case "add":
//       await fs.appendFile(filePath, data);
//       break;
//     case "replace":
//       await fs.writeFile(filePath, data);
//       break;
//     case "remove":
//       await fs.unlink(filePath);
//       break;
//     default:
//       console.log("Unknow command");
//   }
// };

// contactsPath("db/contacts.json", "read");
// contactsPath("db/contacts.json", "add", "\nHeloo");
// contactsPath("db/contacts.json", "replace", "Hello Word");
// contactsPath("./users","remowe");

// module.exports = contactsPath;
