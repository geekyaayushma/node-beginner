var fs = require("fs");

fs.writeFile(
  "mynewfile3.txt",
  "hey! Im learning, glowing and growing",
  (err) => {
    if (err) throw err;
    console.log("Written");
  }
);
