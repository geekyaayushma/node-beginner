var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8081);

/*Other way to create a server
  Using arrow function
   var http = require("http");

    http
    .createServer((req, res) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end("Hello world");
    })
    .listen(8081);

  Separating the Request Handler into a Function
    var http = require("http");

    function Handler (req , res){
      res.writeHead(200, "content-type" : "text/html")
      res.end("Hello world");
      };
    http.createServer(Handler).listen(8081);
*/
