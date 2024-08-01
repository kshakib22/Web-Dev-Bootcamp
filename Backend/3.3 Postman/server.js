import express from "express";
const app = express();
const port = 1313;

app.get("/", (req, res) => {
  res.send("Xuna tui toh shash mama");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
