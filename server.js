const sql = require("mssql")
const db = require("./config/db")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes')
const driverRoutes = require('./routes/driverRoutes')
const vehicleRoutes = require('./routes/vehicleRoutes')
const app = express();

require('dotenv').config();


app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use('/users',userRoutes )
app.use('/dvr',driverRoutes )
app.use('/psv',vehicleRoutes )

app.get("/",(req,res)=>{
    res.send("Welcome to PSVs Managment Information System  APIs  ")
})

const PORT = process.env.PORT
app.listen(PORT,()=>console.log(`Server Started at http://localhost:${PORT}`))




