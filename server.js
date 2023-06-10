import express from "express";
import color from "colors";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import autRouts from './routes/authRoute.js'
import cors from "cors";
//env config
dotenv.config();

//databse config
connectDB(); 

// rest object
const app = express();

//app middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth', autRouts)

//ret Api call
app.get('/', (req, res)=>{
    res.send("<h1>welcome to my ecommerce project</h1>")
});

// set port 
const PORT = process.env || 8080
app.listen(PORT, ()=>{
    console.log(`Server running ${process.env.DEV_MODE} on port ${process.env.PORT}`.bgCyan)
})