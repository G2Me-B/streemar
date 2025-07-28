import User from "../models/User.js"
import FriendRequest from "../models/FriendRequest.js"

export async function getRecommendedUsersname(req, res) {
    try {
        const currentUserId = req.user.id
        const currentUser = req.user

        const recommendedUsers = await User.find({
            $and: [
                { _id: { $ne: currentUserId } }, //exclude current user
                { $id: { $nin: currentUser.friends } }, // exclude current user's friends
                { isOnboarded: true },
            ],
        })
        res.status(200).json(recommendedUsers)
    } catch (error) {
        console.error("Error in getRecommendedUsers controller", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export async function getMyFriends(req, res) {
    try {
        const user = await User.findById(req.user.id).select("friends")
            .populate("friends", "fullName profilePic nativeLangguage learningLanguage")

        res.status(200).json(user.friends)
    } catch (error) {
        console.error("Error in getMyFriends controller", error.message)
        es.status(500).json({ message: "Internal Server Error" })
    }
}


export async function sendFriendRequestname(req, res) {
    try {
        const myId = req.user.id
        const friendId = req.params.id
        const { id: recipientId } = req.params

        // prevent looping request to self
        if (myId === recipientId) {
            return res.status(400).json({ message: "you can't send a request to yourself" })

        }
        // check recipient existence
        const recipient = await User.findById(recipientId)
        if (!recipient) {
            return res.status(404).json({ message: "Recipient not found" })
        }
        // Check if user is already friends
        if (recipient.friends.includes(myId)) {
            return res.status(400).json({ message: "You are already friends with this user " })
        }
        // Check if a request already exists
        const existingRequest = await FriendRequest.findOne({
            $or: [
                { sender: myId, recipient: recipientId },
                { sender: recipientId, recipient: myId }
            ],
        })
        // Check for existing request
        if (existingRequest) {
            res
                .status(400)
                .json({ message: "A freind request already exists between you and this user" })
        }
        // create a friend request
        const friendRequest = await FriendRequest.create({
            sender: myId,
            recipient: recipientId
        })

        res.status(201).json(friendRequest)

    } catch (error) {
        console.error("Error in sendFriendRequest controller", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}