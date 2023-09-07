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

router.get('/getDriver',async(req,res)=>{
   
     const result = await db.query(`select * from DriverInfo`)
     if(result){
 
         res.status(200).json(result.recordset)
     }
 } );


//==================addd driver to database 

router.post("/addDriver", (req, res) => {
    const data = req.body;
  
    // SQL query to insert the data into the database
    const qry = `INSERT INTO DriverInfo (
              CNIC,
              DriverName,
              FatherName,
              Age,
              Address,
      EyeSight,
      Disability,
      Company,
      CellNo,
      LicenseType,
      LicenseNo,
      IssueAuth,
      IssueDate,
      LicenseVerify,
      DriverPic,
      AddedBY,
      AddedON,
      LicenseExpiry,
      Status,
      KM,
      Side,
      EditedBy,
      EditedOn,
      EditedLat,
      EditedLon,
      BanReason,
      AddedZone,
      AddedSector,
      AddedBeat
              ) VALUES (
                '${data.CNIC}',
      '${data.DriverName}',
      '${data.FatherName}',
      '${data.Age}',
      '${data.Address}',
'${data.EyeSight}',
'${data.Disability}',
'${data.Company}',
'${data.CellNo}',
'${data.LicenseType}',
'${data.LicenseNo}',
'${data.IssueAuth}',
'${data.IssueDate}',
'${data.LicenseVerify}',
'${data.DriverPic}',
'${data.AddedBY}',
'${data.AddedON}',
'${data.LicenseExpiry}',
'${data.Status}',
'${data.KM}',
'${data.Side}',
'${data.EditedBy}',
'${data.EditedOn}',
'${data.EditedLat}',
'${data.EditedLon}',
'${data.BanReason}',
'${data.AddedZone}',
'${data.AddedSector}',
'${data.AddedBeat}' 
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
  
  // SQL query to insert the data into the database
  const qry = `UPDATE DriverInfo set 
  DriverName ='${data.DriverName}',
  FatherName ='${data.FatherName}',
  Age ='${data.Age}',
  Address = '${data.Address}',
  EyeSight = '${data.EyeSight}',
  Disability = '${data.Disability}',
  Company = '${data.Company}',
  CellNo = '${data.CellNo}',
  LicenseType = '${data.LicenseType}',
  LicenseNo = '${data.LicenseNo}',
  IssueAuth = '${data.IssueAuth}',
  IssueDate = '${data.IssueDate}',
  LicenseVerify = '${data.LicenseVerify}',
  LicenseExpiry = '${data.LicenseExpiry}' 

  where CNIC =  '${cnic}'`

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



  IssueDate = '${data.IssueAuth}',
  LicenseVerify = '${data.LicenseVerify}',
  LicenseExpiry = '${data.LicenseExpiry}' 