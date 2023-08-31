const sql = require("mssql")
const db = require("./config/db")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes')
const app = express();

require('dotenv').config();


app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use('/users',userRoutes )

app.get("/",(req,res)=>{
    res.send("hello")
})

const PORT = process.env.PORT
app.listen(PORT,()=>console.log(`Server Started at http://localhost:${PORT}`))




