const express = require("express");
const db = require("../config/db");
const router = express.Router();

//=================================================get region
router.get("/region", async (req, res) => {

  const result = await db.query(
    `select distinct region from offices`
  );
  if (result) {
    res.status(200).json(result.recordset);
  }
  
});

//=================================================get  specific zone 
router.get("/zone/:rgn", async (req, res) => {
const region = req.params.rgn
    const result = await db.query(
      `select distinct zone from offices where region ='${region}'`
    );
    if (result) {
      res.status(200).json(result.recordset);
    }
    
  });

  //=================================================get  specific sector 
router.get("/sector/:zone", async (req, res) => {
    const zone = req.params.zone
        const result = await db.query(
          `select distinct sector from offices where zone ='${zone}'`
        );
        if (result) {
          res.status(200).json(result.recordset);
        }
        
      });
  //=================================================get  specific sector 
  router.get("/beat/:sector", async (req, res) => {
    const sector = req.params.sector
        const result = await db.query(
          `select distinct beat from offices where sector ='${sector}'`
        );
        if (result) {
          res.status(200).json(result.recordset);
        }
        
      });
      //=============
        //=================================================get  specific sector 
  router.get("/getall", async (req, res) => {
    
        const result = await db.query(
          `select * from offices`
        );
        if (result) {
          res.status(200).json(result.recordset);
        }
        
      });



module.exports = router;