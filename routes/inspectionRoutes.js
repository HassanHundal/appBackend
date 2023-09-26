const express = require("express");
const db = require("../config/db");
const router = express.Router();

//get specific inspecteion report of specific PSV 
router.get("/inspectPsv/:pre/:model/:no/:dvrCnic/:location", async (req, res) => {
  const psvPre = req.params.pre;
  const psvModel = req.params.model;
  const psvNo = req.params.no;
  const dvrCnic = req.params.dvrCnic;
  const location = req.params.location;

  const result = await db.query(
    `SELECT * FROM (select CONCAT_WS('-',prefixRegNo,vehicleModel,regNo)as psvNo, routeExpiryDate,companyName, iIF(GETDATE()>routeExpiryDate,'Expired','Valid') as routeValidity,routeFrom,routeTo, fitnessExpiryDate, iIF(GETDATE()>fitnessExpiryDate,'Expired','Valid') as fitnessValidity,tyreCondition,tyreExpiry, iIF(GETDATE()>tyreExpiry,'Expired','Valid')as tyreValidity, iIF(trackerStatus=0,'Not Installed','Installed')as trackerStatus,iIF(exitGate=0,'Not Installed','Installed')as exitGate,iIF(fireExt=0,'Not Avaible','Availble')as fireExt,iIF(GETDATE()>fireExpiry,'Expired','Valid')as fireValidity,fireExpiry,iIF(regPlates=0,'As per Pattern','Out of pattern')as numPlate, seatingCap,psvDriver.driverName,psvDriver.licenseNo,psvDriver.licenseType, psvDriver.licenseExpiry,iIF(GETDATE()>psvDriver.licenseExpiry,'Expired','Valid')as licenseValidity from psvVehicles,psvDriver where psvNo = '${psvPre+psvModel+psvNo}' and psvDriver.cnic = '${dvrCnic}') AS REPORT,
    (select count(psvNo) as tripcount from inspectionReport where psvNo = '${psvPre +"-"+psvModel+"-"+psvNo}' and addedDate >= GETDATE()-1 and chkPoint = '${location}') as tripcount`);

  if (result) {
    res.status(200).json(result.recordset);
  }
});


//---------------------------------------insert in final report 

router.post("/addInspection", (req, res) => {
    const data = req.body;
   
    const qry = `insert into inspectionReport (
       
        psvNo,
        companyName,	
        routeStatus,
        routePath,
        fitnessStatus,
        tyreStatus,
        trackerStaus,
        exitGate,
        fireExt,
        regPlate,
        tripCount,
        seats,
        onBoardpassenger,
        dvrLicenseNo,
        licenseType,
        licenseStatus,
        actionTaken,
        remarks,
        addedBy,
        addedDate,
        chkPoint
          )
          values (
            
            '${data.psvNo}',
            '${data.companyName}',
            '${data.routeStatus}',
            '${data.routePath}',
            '${data.fitnessStatus}',
            '${data.tyreStatus}',
            '${data.trackerStaus}',
            '${data.exitGate}',
            '${data.fireExt}',
            '${data.regPlate}',
            '${data.tripCount}',
            '${data.seats}',
            '${data.onBoardpassenger}',
            '${data.dvrLicenseNo}',
            '${data.licenseType}',
            '${data.licenseStatus}',
            '${data.actionTaken}',
            '${data.remarks}',
            '${data.addedBy}',
            '${data.addedDate}',
            '${data.chkPoint}'
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


module.exports = router;










