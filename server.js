const sql = require("mssql")
const db = require("./config/db")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));



app.get("/",async(req,res)=>{
    let pool = db.Request()
    const qry = "select * from DriverInfo"
    const result = await pool.query(qry,(err,recordset)=>{
        console.log(result.recordset)
    })
  
    res.send(result.recordset)
})
app.listen(5000,()=>console.log("Server started"))




