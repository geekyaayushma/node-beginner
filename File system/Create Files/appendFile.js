var fs = require("fs");

fs.appendFile("mynewfile1.txt", "Hello file system!", function (err) {
  if (err) throw err;
  console.log("File appended!");
});
