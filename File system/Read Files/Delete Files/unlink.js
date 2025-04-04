var fs = require("fs");

fs.unlink("../Create Files/mynewfile2.txt", (err) => {
  if (err) throw err;
  console.log("File Deleted");
});
