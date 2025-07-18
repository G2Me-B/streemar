import User from "../models/User.js";
import jwt from "jsonwebtoken"
import "dotenv/config"

export function signup(req, res) {
    const { email, password, fullName } = req.body

    try {
        // Verify that all field are not empty
        if (!email || !password || !fullName) {
            return res.status(400).json(({ message: "All fields are required" }))
        }
        // Verify password length
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const existingUser = User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists, kindy use another" })
        }

        // Generate a token id
        const idx = Math.floor(Math.random() * 100) + 1;
        const randomAvatar = `${idx}`
        const newUser = new User.create({
            email,
            fullName,
            password,
            profilePic: randomAvatar
        })
        // TODO: CREATE USER UB STREAM AS WELL

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '7d'
        })

        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true, // prevent xss attacks
            sameSite: "strict",//prevent CSRF attacks
            secure: process.env.NODE_ENV === "production"
        })
         res.status(201).json({sucess:true, user:newUser })
    } catch (error) { }
}

export function login(req, res) {
    res.send("Login route")
}

export function logout(req, res) {
    res.send("Logout route")
}