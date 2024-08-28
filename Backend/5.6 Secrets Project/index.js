import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const URL = "https://secrets-api.appbrewery.com/random";
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(URL);
    const data = { secret: response.data.secret, user: response.data.username };
    res.render("index.ejs", data);
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
