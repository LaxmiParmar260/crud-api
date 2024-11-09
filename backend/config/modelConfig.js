const { mongoose } = require("mongoose");


const connectDB = async ()=>{
    const conn =  await mongoose.connect(process.env.URI)
    try {
        console.log("DB connection success", conn.connection.host) 
    } catch (error) {
        console.log(error.message)
        
    }
    
}

module.exports = connectDB