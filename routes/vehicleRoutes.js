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
        psvNo,
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
        formOneStatus,
        addedDate,
        addedby,
        addedPoint
        )
        values (
                '${data.prefixRegNo + data.vehicleModel + data.regNo}',
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
                '${data.formOneStatus}',
                '${data.addedDate}',
                '${data.addedBy}',
                '${data.addedPoint}'
)`;
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

//------------------------------add/update documents form

router.patch("/updatePsvDocs/:psvNo", (req, res) => {
  const psvNo = req.params.psvNo;
  const data = req.body;
  // SQL query to update the data into the database
  const qry = `UPDATE psvVehicles set 
          routePermitNo = '${data.routePermitNo}',
          issueAuthority ='${data.issueAuthority}',
          routeExpiryDate = '${data.routeExpiryDate}',
          routeType = '${data.routeType}',
          routeFrom = '${data.routeFrom}',
          routeTo = '${data.routeTo}',
          routeVia = '${data.routeVia}',
          fitnessNo = '${data.fitnessNo}',
          fitnessExpiryDate = '${data.fitnessExpiryDate}',
          fitnessAuthority = '${data.fitnessAuthority}',
          formTwoStatus = '${data.formTwoStatus}',
          editedOn = '${data.editedOn}',
          editedBy = '${data.editedBy}',
          editedPoint = '${data.editedPoint}'
  where psvNo =  '${psvNo}'`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500); // Internal Server Error
    } else {
      console.log("Data Updated successfully");
      res.sendStatus(200); // OK
    }
  });
});

//------------------------------add/update ROUTE/FITNESS form

router.patch("/updatePsvRF/:psvNo", (req, res) => {
  const psvNo = req.params.psvNo;
  const data = req.body;
  // SQL query to update the data into the database
  const qry = `UPDATE psvVehicles set 
  tyreCompany = '${data.tyreCompany }',
  tyreManDate = '${data.tyreManDate}',
  tyreExpiry = '${data.tyreExpiry}',
  tyreChkDate = '${data.tyreChkDate}',
  tyreCondition = '${data.tyreCondition}',
  tyreTread = '${data.tyreTread}',
  tyreRemarks = '${data.tyreRemarks  }',
  headLights = '${data.headLights }',
  backLigths = '${data.backLigths }',
  hazardLights = '${data.hazardLights }',
  fogLights = '${data.fogLights }',
  emergencyLights = '${data.emergencyLights }',
  formThreeStatus = '${data.formThreeStatus }',
  editedOn = '${data.editedOn}',
  editedBy = '${data.editedBy}',
  editedPoint = '${data.editedPoint}'
  
  where psvNo =  '${psvNo}'`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500); // Internal Server Error
    } else {
      console.log("Data Updated successfully");
      res.sendStatus(200); // OK
    }
  });
});

//------------------------------add/update ROUTE/FITNESS form

router.patch("/updatePsvOthers/:psvNo", (req, res) => {
  const psvNo = req.params.psvNo;
  const data = req.body;
  // SQL query to update the data into the database
  const qry = `UPDATE psvVehicles set 
  regPlates ='${data.regPlates}',
	sideMirror ='${data.sideMirror}',
	frontWippers ='${data.frontWippers}',
	fireExt ='${data.fireExt}',
	fireExpiry ='${data.fireExpiry}',
	firstAidBox ='${data.firstAidBox}',
	zeroSeat ='${data.zeroSeat}',
	cones ='${data.cones}',
	formFourStatus ='${data.formFourStatus}',
  editedOn = '${data.editedOn}',
  editedBy = '${data.editedBy}',
  editedPoint = '${data.editedPoint}'

  where psvNo =  '${psvNo}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500); // Internal Server Error
    } else {
      console.log("Data Updated successfully");
      res.sendStatus(200); // OK
    }
  });
});

module.exports = router;





