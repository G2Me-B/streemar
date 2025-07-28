import express from "express"
import "dotenv/config"
import cookieParser  from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js"
import userRoutes from "./routes/user.route.js"


const PORT = process.env.PORT
// Instantiate app
const app = express()

// Middleware instantiation
app.use(express.json())
app.use(cookieParser())


// Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

// Listen to port
app.listen(PORT, ()=>{
    console.log(`Server is activated on port:${PORT}`)
    connectDB();
})