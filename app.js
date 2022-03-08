const http = require('http');

const server = http.createServer((req, res) => {
    console.log('url', req.url);
    if(req.url === "/") {
        console.log("Home Page");
    }else if(req.url === "/api"){
        console.log("API");
    }else{
        console.log("404");
    }
    console.log("complete");
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log("Server is running port",PORT);
});