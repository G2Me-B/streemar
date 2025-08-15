import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import { acceptFriendRequest, getFriendRequest, getMyFriends, getOutgoingFriendReqs, getRecommendedUsers, sendFriendRequest } from "../controllers/user.controller.js"

// instantiate router
const router = express.Router()

// apply auth middleware to all routes
router.use(protectRoute)

// User routes
router.get("/", getRecommendedUsers)
router.get("/friends", getMyFriends)

// send a friend request
router.post("/friend-request/:id", sendFriendRequest)
// accept a friend request
router.put("/friend-request/:id/accept", acceptFriendRequest)

router.get("/friend-request", getFriendRequest)
router.get("/outgoing-friend-requests", getOutgoingFriendReqs)


export default router