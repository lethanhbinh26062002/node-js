const http = require('http');
import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoute from "../router/product";
import userRoute from "../router/auth";
import categoryRoute from "../router/category"
import commentRoute from "../router/comment"
const app = express();
import mongoose from "mongoose";
app.use(express.json());

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api",productRoute,userRoute,categoryRoute,commentRoute);
mongoose.connect('mongodb://localhost:27017/web16309')
.then(() => console.log("Kết nối DB thành công"))
.catch((error) => console.log(error));


const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port",PORT);
});