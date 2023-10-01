const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.get("/getAllCompany", async (req, res) => {

  const result = await db.query(
    `select distinct companyName from psvCompanies`
  );
  if (result) {
    res.status(200).json(result.recordset);
  }
  
});

//============GET SUB OFFICE

router.get("/getCmp/:name", async (req, res) => {
    cmpname = req.params.name
    const result = await db.query(
      `select  subOffice  from psvCompanies where companyName = '${cmpname}'`
    );
    if (result) {
      res.status(200).json(result.recordset);
    }
    
  });

  //==================addd driver to database 

router.post("/addCompany", (req, res) => {
    const data = req.body;
    const date = new Date().toLocaleDateString().split(",")[0]
    
  
    // SQL query to insert the data into the database
    const qry = `INSERT INTO psvCompanies (
       
        companyName,
        subOffice,
        address,
        managerName,
        managerCell,
        ownerName,
        ownerCell,
        addedBy,
        addedDate,
        addedTime,
        addedPoint

              ) VALUES (
                '${data.companyName}',
                '${data.subOffice}',
                '${data.address}',
                '${data.managerName}',
                '${data.managerCell}',
                '${data.ownerName}',
                '${data.ownerCell}',
                '${data.addedBy}',
                '${data.addedDate}',
                '${data.addedTime}',
                '${data.addedPoint}'
)`
  
    db.query(qry, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500); // Internal Server Error
      } else {
        console.log("Data Saved successfully");
        res.sendStatus(200); // OK
      }
    });
  });
  

  

module.exports = router;


       