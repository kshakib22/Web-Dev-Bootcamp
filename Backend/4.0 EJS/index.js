import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;
const date = new Date();
const day = date.getDay();

let advice = "";
let daytype = "";

if (day == 0 || day == 6) {
  daytype = "weekday.";
  advice = "It's time to grind!";
} else {
  daytype = "weekend";
  advice = "It's time to relax!";
}

app.get("/", (req, res) => {
  res.render("index.ejs", { dayType: daytype, advice: advice });
});
app.listen(port, (req, res) => {
  console.log("App running in port " + port);
});
