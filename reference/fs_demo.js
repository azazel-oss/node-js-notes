const fs = require("fs");
const path = require("path");

// // Create folder
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) throw err;
//   console.log("Folder created ...");
// });

// // Create and write to file
// fs.writeFile(
//   path.join(__dirname, "test", "index_demo.html"),
//   "Hello world!",
//   (err) => {
//     if (err) throw err;
//     console.log("File created ...");
//     fs.appendFile(
//       path.join(__dirname, "test", "index_demo.html"),
//       " I love Node.js",
//       (err) => {
//         if (err) throw err;
//         console.log("Appended to file");
//       }
//     );
//   }
// );

// // Reading a file
// fs.readFile(
//   path.join(__dirname, "test", "index_demo.html"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// Renaming a file
fs.rename(
  path.join(__dirname, "test", "index_demo.html"),
  path.join(__dirname, "test", "index.html"),
  (err) => {
    if (err) throw err;
    console.log("Successfully renamed a file");
  }
);
