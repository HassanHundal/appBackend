const express = require('express');
const db = require('../config/db')
const router = express.Router();

//get specific driver based on cnic
router.get('/getPsv/:pre/:no/:model',async(req,res)=>{
   const psvPre = req.params.pre
   const psvNo= req.params.no
   const psvModel = req.params.model
  
 
    const result = await db.query(`select * from  VehicleInfo  where PrefixRegNo = '${psvPre}' and RegNo = '${psvNo}' and VehicleModel = ${psvModel} `)

    if(result){

        res.status(200).json(result.recordset)
    }
} );





module.exports = router



