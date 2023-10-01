const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.get("/getUser/:userCnic", async (req, res) => {
  const user = req.params.userCnic;
  const result = await db.query(
    `select userCnic,userPwd,role,userName,rank,beltNo,status from users where userCnic = ${user}`
  );
  if (result) {
    res.status(200).json(result.recordset);
  }
  
});

//==================addd user to database

router.post("/addUser", (req, res) => {
  const data = req.body;

  // SQL query to insert the data into the database
  const qry = `INSERT INTO users (
        userCnic,
        userName,
        userPwd,
        cellNo,
        rank,
        beltNo,
        role,
        status,
        beatId,
        sectorId,
        zoneId
              ) VALUES (

                '${data.userCnic}',
                '${data.userName}',
                '${data.userPwd}',
                '${data.cellNo}',
                '${data.rank}',
                '${data.beltNo}',
                '${data.role}',
                '${data.status}',
                '${data.beatId}',
                '${data.sectorId}',
                '${data.zoneId}'
                
)`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500); // Internal Server Error
    } else {
      res.sendStatus(200); // OK
    }
  });
});

//==================Update user to database

router.patch("/updateUser/:cnic", (req, res) => {
  const cnic = req.params.cnic;
  const data = req.body;
  // SQL query to update the data into the database
  const qry = `UPDATE users set 
  userName = '${data.userName}',
  userPwd = '${data.userPwd}',
  cellNo = '${data.cellNo}',
  rank = '${data.rank}',
  beltNo = '${data.beltNo}',
  role = '${data.role}',
  status = '${data.status}',
  beatId = '${data.beatId}',
  sectorId = '${data.sectorId}',
  zoneId = '${data.zoneId}'

  where userCnic =  '${cnic}'`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500); // Internal Server Error
    } else {
      res.sendStatus(200); // OK
    }
  });
});

router.patch("/updatePwd/:cnic", (req, res) => {
  const cnic = req.params.cnic;
  const data = req.body;
  // SQL query to update the data into the database
  const qry = `UPDATE users set 
  userPwd = '${data.userPwd}'
  where userCnic =  '${cnic}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500); // Internal Server Error
    } else {
      res.sendStatus(200); // OK
    }
  });
});

module.exports = router;
