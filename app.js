const http = require('http');
const express = require('express');

const app = express();
app.use(express.json());

// middleware
const check = (req, res, next) => {
    const status = true;
    if(status) {
        console.log("Hello");
        next();
    }else{
        console.log("Fail");
    }
}
app.use(check)
// app.use((req, res,next) => {
//     console.log('Step 2');
//     next();
// })
// app.get('/',(req, res,next) => {
//     console.log('Home');
//     next();
// })
app.get('/api/products',check ,(req, res,) => {
    const products = [
        {id: 1, name: 'Product A'},
        {id: 2, name: 'Product B'},
        {id: 3, name: 'Product C'}
    ];
    res.json(products);
})
// const server = http.createServer((req, res) => {
//     console.log('url', req.url);
//     if(req.url === "/") {
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<html><body><h1>Home page</h1></body></html>");
//         res.end();
//         console.log("Home Page");
//     }else if(req.url === "/api/products"){
//         const products=[
//             {id:1 , name:"product A"},
//             {id:2 , name:"product B"},
//         ];
//         res.end(JSON.stringify(products));
//         console.log("API");
//     }else{
//         console.log("404");
//     }
//     console.log("complete");
// });

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port",PORT);
});