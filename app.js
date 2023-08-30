import express from "express";
import userRouter from "./routes/user.js"
import {config} from "dotenv"

export const app = express();

config({
    path:"./data/config.env",
})


//using middlewares
// app.use(express.urlencoded({extended:true})) //it is used to accept the form data 
// to accept json we are going to use 
app.use(express.json());
app.use("/users" ,userRouter);




