/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [{ type: "input", name: "url", message: "Enter a URL: " }];
inquirer
  .prompt(questions)
  .then((answers) => {
    const userUrl = answers.url;
    console.log("Entered URL:", userUrl);
    var qr_png = qr.image(userUrl);
    qr_png.pipe(fs.createWriteStream("url.png"));
    fs.writeFile("URL.txt", userUrl, (err) => {
      if (err) throw err;
      console.log("URL.txt has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
      console.error("Error:", error);
    } else {
      console.error("Error:", error);
    }
  });
