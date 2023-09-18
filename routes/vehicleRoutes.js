const express = require("express");
const db = require("../config/db");
const router = express.Router();

//get specific driver based on cnic
router.get("/getPsv/:pre/:no/:model", async (req, res) => {
  const psvPre = req.params.pre;
  const psvNo = req.params.no;
  const psvModel = req.params.model;

  const result = await db.query(
    `select * from  psvVehicles  where prefixRegNo = '${psvPre}' and regNo = '${psvNo}' and vehicleModel = ${psvModel} `
  );

  if (result) {
    res.status(200).json(result.recordset);
  }
});
//------------------------//==================addd driver to database

router.post("/addPsv", (req, res) => {
  const data = req.body;

  // SQL query to insert the data into the database
  const qry = `insert into psvVehicles (
        vehicleType,
        prefixRegNo,
        vehicleModel,
        regNo,
        chasisNo,
        engineNo,
        vehicleMake,
        vehicleColor,
        acStatus,
        seatingCap,
        trackerStatus,
        exitGate,
        manufactureYear,
        companyName,
        formOneStatus
        )
        values (
                '${data.vehicleType}',
                '${data.prefixRegNo}',
                '${data.vehicleModel}',
                '${data.regNo}',
                '${data.chasisNo}',
                '${data.engineNo}',
                '${data.vehicleMake}',
                '${data.vehicleColor}',
                '${data.acStatus}',
                '${data.seatingCap}',
                '${data.trackerStatus}',
                '${data.exitGate}',
                '${data.manufactureYear}',
                '${data.companyName}',
                '${data.formOneStatus}'
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

//------------------------------add documents 



module.exports = router;


