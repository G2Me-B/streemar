import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import { getMyFriends, getRecommendedUsersname, sendFriendRequestname } from "../controllers/user.controller.js"

// instantiate router
const router = express.Router()

// apply auth middleware to all routes
router.use(protectRoute)

// User routes
router.get("/", getRecommendedUsersname)
router.get("/friends", getMyFriends)

// send a friend request
router.post("/friend-requst/:id",sendFriendRequestname)



export default router