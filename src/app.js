const http = require('http');
import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoute from "../router/product";
const app = express();
import mongoose from "mongoose";
app.use(express.json());

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api",productRoute);
mongoose.connect('mongodb://localhost:27017/web16309')
.then(() => console.log("Kết nối DB thành công"))
.catch((error) => console.log(error));
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