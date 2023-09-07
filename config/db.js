const sql = require('mssql')
require('dotenv').config();



const config = {
   user:process.env.PSV_USER,
    password:process.env.PSV_PWD ,
    server:process.env.PSV_SERVER,
    database:process.env.PSV_DB,
    port:1434,
   
   options: {
        trustedconnection: true,
        trustServerCertificate: true
    },
   
}
async function connectDB(){
    try {
         sql.connect(config)
        console.log('connected to SQL')
    } catch (error) {
        console.log(error)
    }
}

connectDB()

module.exports = sql