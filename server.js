const sql = require("mssql")
const db = require("./config/db")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes')
const driverRoutes = require('./routes/driverRoutes')
const inspectionRoutes =require('./routes/inspectionRoutes')
const companyRoutes = require('./routes/companyRoutes')
const officeRoutes = require('./routes/officeRoutes')
const userfeedBackRoutes = require('./routes/userfeedBackRoutes')

const app = express();





const vehicleRoutes = require('./routes/vehicleRoutes')

require('dotenv').config();


app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use('/users',userRoutes )
app.use('/dvr',driverRoutes )
app.use('/psv',vehicleRoutes )
app.use('/rpt',inspectionRoutes )
app.use('/cmp',companyRoutes )
app.use('/ofc',officeRoutes )
app.use('/fbk',userfeedBackRoutes)

app.get("/",(req,res)=>{
    res.send("Welcome to PSVs Managment Information System  APIs  ")
})

const PORT = process.env.PORT
app.listen(PORT,()=>console.log(`Server Started at http://localhost:${PORT}`))




