import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import { acceptFriendRequest, getMyFriends, getRecommendedUsersname, sendFriendRequest } from "../controllers/user.controller.js"

// instantiate router
const router = express.Router()

// apply auth middleware to all routes
router.use(protectRoute)

// User routes
router.get("/", getRecommendedUsersname)
router.get("/friends", getMyFriends)

// send a friend request
router.post("/friend-requst/:id",sendFriendRequest)
// accept a friend request
router.put("/fiend-request/:id/accept",acceptFriendRequest)

router.get("/friend-request",getFriendRequest)


export default router