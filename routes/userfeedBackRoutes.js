const express = require("express");
const db = require("../config/db");
const router = express.Router();


router.post("/feedbck", (req, res) => {
  const data = req.body;

  // SQL query to insert the data into the database
  
const qry = `insert into userFeedBack (
  userCnic,
  feedBack
  )
  values (
          '${data.userCnic}',
          '${data.feedBack}'
    
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

module.exports = router;




