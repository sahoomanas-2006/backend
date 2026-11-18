import express from 'express'
import { connectDB } from './config/db.js';


// app config

const app =express();
const port =4000

// moddleware
app.use(express.json());

// DB connection

connectDB();

app.get("/",(req,res)=>{
    res.send("API is working");
})

app.listen(port,()=>{
    console.log(`server is started on http://localhost:${port}`);
});