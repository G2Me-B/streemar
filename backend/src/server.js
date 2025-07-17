import express from "express"
import "dotenv/config"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js"


const PORT = process.env.PORT
// Instantiate app
const app = express()

// Middleware instantiation
app.use(express.json())


// Routes
app.use("/api/auth", authRoutes)

// Listen to port
app.listen(PORT, ()=>{
    console.log(`Server is activated on port:${PORT}`)
    connectDB();
})