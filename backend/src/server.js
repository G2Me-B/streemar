import express from "express"
import "dotenv/config"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js"
import cookieParser  from "cookie-parser"


const PORT = process.env.PORT
// Instantiate app
const app = express()

// Middleware instantiation
app.use(express.json())
app.use(cookieParser())


// Routes
app.use("/api/auth", authRoutes)

// Listen to port
app.listen(PORT, ()=>{
    console.log(`Server is activated on port:${PORT}`)
    connectDB();
})