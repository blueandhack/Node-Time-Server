# CS571_Week3_q13_19604_Yujia_Lin

## Introduction

**A Node.js server to show the current time with JSON format**

- Request the url http://localhost:8000/api/currenttme
- The browser displays {"year":2021,"month":09,"date":24,"hour":16,"minute":09}

## ****Design - Based on example code****

**Split to three parts (functions)**

- zeroFill - format one digit to two digits with zero
- nowToJson - return object of date to JSON format, we should using JSON.stringify() function inside the function
- server - node.js server by http module

## ****Implementation****

My code

```jsx
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
```

## Test

Test current time

![Untitled](CS571_Week3_q13_19604_Yujia_Lin%20d2fd2f3aef7e40879971e065805a1e67/Untitled.png)

![Untitled](CS571_Week3_q13_19604_Yujia_Lin%20d2fd2f3aef7e40879971e065805a1e67/Untitled%201.png)

Test wrong path and get 404 error

![Untitled](CS571_Week3_q13_19604_Yujia_Lin%20d2fd2f3aef7e40879971e065805a1e67/Untitled%202.png)

## ****Conclusion****

1. JSON.stringify() is a key function
2. JSON.stringify will convert object variable to JSON format
3. Node.js server module will handle HTTP requests
4. Set correct response head with “application/json”

## **References**

[https://hc.labnet.sfbu.edu/~henry/npu/classes/javascript/node_js/course/nodeschool/learnyounode/http_json_api_server.html](https://hc.labnet.sfbu.edu/~henry/npu/classes/javascript/node_js/course/nodeschool/learnyounode/http_json_api_server.html)

[https://hc.labnet.sfbu.edu/~henry/npu/classes/javascript/json/slide/index_slide.html](https://hc.labnet.sfbu.edu/~henry/npu/classes/javascript/json/slide/index_slide.html)

[https://hc.labnet.sfbu.edu/~henry/npu/classes/javascript/node_js/course/nodeschool/learnyounode/time_server.html](https://hc.labnet.sfbu.edu/~henry/npu/classes/javascript/node_js/course/nodeschool/learnyounode/time_server.html)

Google Slide

[https://docs.google.com/presentation/d/1FLPdjUFyYk0fkaJmKoeh1kxTskztQbMdc_13rBS6Ph0/edit?usp=sharing](https://docs.google.com/presentation/d/1FLPdjUFyYk0fkaJmKoeh1kxTskztQbMdc_13rBS6Ph0/edit?usp=sharing)

GitHub Repo

[https://github.com/blueandhack/Node-Time-Server](https://github.com/blueandhack/Node-Time-Server)