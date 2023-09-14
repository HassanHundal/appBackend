const express = require('express');
const db = require('../config/db')
const router = express.Router();

//get specific driver based on cnic
router.get('/getDriver/:Dvr',async(req,res)=>{
   const dvr = req.params.Dvr
    const result = await db.query(`select * from psvDriver where CNIC = '${dvr}' `)
    if(result){

        res.status(200).json(result.recordset)
    }
} );

router.get('/getallDriver',async(req,res)=>{
   
     const result = await db.query(`select * from psvDriver`)
     if(result){
 
         res.status(200).json(result.recordset)
     }
 } );


//==================addd driver to database 

router.post("/addDriver", (req, res) => {
    const data = req.body;
  
    // SQL query to insert the data into the database
    const qry = `INSERT INTO psvDriver (
      cnic,
      driverName,
      fatherName,
      dob,
      address,
      cellNo,
      disability,
      licenseNo,
      licenseType,
      issueDate,
      licenseExpiry,
      licenseAuthority,
      companyId,
      addedBy,
      addedDate,
      addedTime,
      addedPoint,
      beatId
              ) VALUES (
                '${data.cnic}',
                '${data.driverName}',
                '${data.fatherName}',
                '${data.dob}',
                '${data.address}',
                '${data.cellNo}',
                '${data.disability}',
                '${data.licenseNo}',
                '${data.licenseType}',
                '${data.issueDate}',
                '${data.licenseExpiry}',
                '${data.licenseAuthority}',
                '${data.companyId}',
                '${data.addedBy}',
                '${data.addedDate}',
                '${data.addedTime}',
                '${data.addedPoint}',
                '${data.beatId}'
)`
  
    db.query(qry, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500); // Internal Server Error
      } else {
        console.log("Data inserted successfully");
        res.sendStatus(200); // OK
      }
    });
  });
  


//==================Update driver to database

router.patch('/updateDriver/:cnic',(req, res) => {
  const cnic = req.params.cnic
  const data = req.body;
  // SQL query to update the data into the database
  const qry = `UPDATE psvDriver set 
            driverName ='${data.driverName}',
            fatherName ='${data.fatherName}',
            dob ='${data.dob}',
            address ='${data.address}',
            cellNo ='${data.cellNo}',
            disability ='${data.disability}',
            licenseNo ='${data.licenseNo}',
            licenseType ='${data.licenseType}',
            issueDate ='${data.issueDate}',
            licenseExpiry ='${data.licenseExpiry}',
            licenseAuthority ='${data.licenseAuthority}',
            companyId ='${data.companyId}',
            editedBy ='${data.editedBy}',
            editedDate ='${data.editedDate}',
            editedTime ='${data.editedTime}',
            beatId ='${data.beatId}'

  where cnic =  '${cnic}'`

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500); // Internal Server Error
    } else {
      console.log("Data Updated successfully");
      res.sendStatus(200); // OK
    }
  });
})


module.exports = router

