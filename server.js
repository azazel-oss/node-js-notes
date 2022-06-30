const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     "utf-8",
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     "utf-8",
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Asad", age: 30 },
  //     { name: "John", age: 24 },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  // Build File Path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // File extension
  let extension = path.extname(filePath);
  console.log(extension);

  // Initial content type
  let contentType = "text/html";

  // Check ext and accordingly set content type
  switch (extension) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".ico":
      contentType = "image/x-icon";
      break;
    case ".png":
      contentType = "image/png";
      break;
  }

  // Read the content file
  fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
      console.log(err);
      if (err.code == "ENOENT") {
        // Serve the error page
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          "utf-8",
          (err, content) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            console.log(content);
            res.end(content);
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error, ${err.code}`);
      }
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(content);
    }
  });
  res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server is listening on port: ", PORT);
});
