const http = require("http");
var url = require("url");

function zeroFill(i) {
  return (i < 10 ? "0" : "") + i;
}

function nowToJson() {
  var d = new Date();
  // return current time in JSON format
  const object = {
    year: d.getFullYear(),
    month: zeroFill(d.getMonth() + 1),
    day: zeroFill(d.getDate()),
    hour: zeroFill(d.getHours()),
    minute: zeroFill(d.getMinutes()),
  };
  return JSON.stringify(object);
}

// Create an instance of the http server to handle HTTP requests
let server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // check url
  if (/^\/api\/currenttime/.test(req.url)) {
    // return current time
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(nowToJson());
  } else {
    // return 404 when url is not matched
    res.writeHead(404);
    res.end();
  }
});

// Listening on the port provided on the command line
server.listen(Number(process.argv[2]));
console.log("Node server running on http://localhost:" + process.argv[2]);
