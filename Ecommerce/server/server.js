const express = require("express");
const app = express();
const color = require("colors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgon = require("morgan");
const authRouter = require("./routes/auth.route");

// config dotenv 
dotenv.config()

// database config
connectDB()

// middlewars
app.use(morgon('dev'))
app.use(express.json())

// routes
app.use("/api/v1/",authRouter)





// PORT
const PORT = process.env.PORT || 8800

app.listen(PORT,()=>{console.log(`server running on ${process.env.MODE} mode on port ${PORT} is running `.bgCyan.white)})

