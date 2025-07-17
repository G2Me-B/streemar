import User from "../models/User.js";
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

        const existingUSer = User.findOne({email})
        if(existingUSer){
            return res.status(400).json({message:"Email already exists, kindy use another"})
        }

        // Generate a token id
        const idx = Math.floor(Math.random() *100) + 1;
        const randomAvatar
    } catch (error) { }
}

export function login(req, res) {
    res.send("Login route")
}

export function logout(req, res) {
    res.send("Logout route")
}