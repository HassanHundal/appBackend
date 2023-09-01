const express = require('express');
const db = require('../config/db')
const router = express.Router();

//get specific driver based on cnic
router.get('/getDriver/:Dvr',async(req,res)=>{
   const dvr = req.params.Dvr
    const result = await db.query(`select * from DriverInfo where CNIC = '${dvr}' `)
    if(result){

        res.status(200).json(result.recordset)
    }
} );

//addd driver to database 
module.exports = router



