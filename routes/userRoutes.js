const express = require('express');
const db = require('../config/db')
const router = express.Router();


router.get('/getUser/:userCnic',async(req,res)=>{
   const user = req.params.userCnic
    const result = await db.query(`select userCnic,userPwd from users where userCnic = ${user}` )
    if(result){

        res.status(200).json(result.recordset)
    }
} );

module.exports = router



