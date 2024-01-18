const http = require("http");



const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("welcome to create our web server");
    }
    else if (req.url === "/about") {
        res.end("welcome to about page");
    }
    else if (req.url === "/home") {
        res.end("welcome to home page");
    }
    else if (req.url === "/userapi") {
        // fs.readFile("./userApi.json", "utf-8", (err, data) => {
        //     if (err) {
        //         console.error(err);
        //     }
        //     else {
        //         console.log(data);
        //     }
        // });
        res.end("welcome to API page");
    }
    else if (req.url === "/contact") {
        res.end("welcome to contact page");
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h2>page not found<h2/>");
    }

});
server.listen(8000, "127.0.0.1", () => {
    console.log("listening is going on");
});
