var fs = require("fs");

fs.writeFile(
  "../Create Files/mynewfile3.txt",
  "This is updated text",
  (err) => {
    if (err) throw err;
    console.log("Updated");
  }
);
