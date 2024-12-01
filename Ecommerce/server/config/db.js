const mongoose = require('mongoose')
const color = require("colors")


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`db Connection successfully`.bgGreen.white)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB