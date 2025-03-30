var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hey! Im learning node");
    res.end();
  })
  .listen(8080);
