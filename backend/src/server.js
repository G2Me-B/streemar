import express from "express"
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"

const PORT = process.env.PORT
// Instantiate app
const app = express()

// Middleware instantiation
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true, //Frontend can access cookies
    }))
app.use(express.json())
app.use(cookieParser())


// Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/chat", chatRoutes)

// Listen to port
app.listen(PORT, () => {
    console.log(`Server is activated on port:${PORT}`)
    connectDB();
})