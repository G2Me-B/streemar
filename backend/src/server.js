import express from "express"
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"
import path from "path"

const PORT = process.env.PORT

const __dirname = path.resolve();

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

//  Environment logic
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}


// Listen to port
app.listen(PORT, () => {
    console.log(`Server is activated on port:${PORT}`)
    connectDB();
})