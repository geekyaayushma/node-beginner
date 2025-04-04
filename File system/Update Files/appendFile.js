var fs = require("fs");

fs.appendFile("../Create Files/mynewfile1.txt", "And this is added", (err) => {
  if (err) throw err;
  console.log("Appended");
});
