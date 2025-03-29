var http = require("http");
var time = require("./myfirstmodule");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + time.myDateTime());
    res.end();
  })
  .listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
  });
