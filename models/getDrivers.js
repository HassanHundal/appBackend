import db from '../config/db'



const getData =async()=>{

    let pool = db.Request()
    const qry = "select * from Driverinfo"
    const result = await pool.query(qry,(err,recordset)=>{
        console.log(result.recordset)
    })
}
export default getData

