import express from "express"
import { login, logout, onboard, signup } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

// Routes
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.post("/onboarding",protectRoute,onboard)



export default router