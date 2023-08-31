const express = require('express');
const db = require('../config/db')
const router = express.Router();


router.get('/getUser/:userName',async(req,res)=>{
   const user = req.params.userName
    const result = await db.query(`select UserName,UserPassword from COMMON_USER where UserName ='${user}'`)
    if(result){

        res.status(200).json(result.recordset)
    }
} );

module.exports = router



