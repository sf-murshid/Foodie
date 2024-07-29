import express from "express"
import cors from "cors"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import connectDB from "./config/db.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use("/images",express.static('uploads'))

// db connection
connectDB()
// api endpoints
app.use("/api/user",userRouter)
app.use("/api/food",foodRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// YOU CAN SAVE UR DATABASE IN THIS COMMENT IF U WANT --> 