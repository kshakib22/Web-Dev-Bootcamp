import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<center><h1>HTML response</h1></center>");
});

app.get("/about", (req, res) => {
  res.send("<center><h1>About Me</h1></center>");
});

app.get("/contact", (req, res) => {
  res.send("<center><h1>Contact Me</h1></center>");
});
