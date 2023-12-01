const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at: sakshamgupta.ai@gmail.com");
});

app.get("/about", (req, res) => {
  res.send("I am Saksham Gupta, a Frontend React Developer");
});

app.get("/hobbies", (req, res) => {
  res.send("<ul><li>Code</li><li>Video Editing</li><li>Gym</li></ul>");
});

app.listen(3000, () => {
  console.log("Server is running on localhost:3000");
});
