import http from "http";
import { IncomingForm } from "formidable";

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      const form = new IncomingForm();
      form.parse(req, function (err, fields, files) {
        res.write("File uploaded");
        res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8081);
