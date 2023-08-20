const express = require('express')
const cors = require('cors');
const app = express()
 const port = 5000
const mongoDB = require("./db")
mongoDB();


app.use(cors({
   origin: 'http://localhost:5173', // Replace with your frontend's origin
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true, // If you're using cookies or authentication
 }));
 
 app.get('/',(req,res)=>{
    res.send("Hello World")
 })
app.use(express.json())
 app.use('/api',require("./Routes/CreateUser"));
 app.use('/api',require("./Routes/DisplayData"));

 app.listen(port,() =>{
    console.log(`Example app listining  on port ${port}`)
 })