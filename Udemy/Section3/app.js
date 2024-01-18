const http = require('http');
const server = http.createServer((req, resp) => {
    console.log(req);
    process.exit();
})
server.listen(3000);