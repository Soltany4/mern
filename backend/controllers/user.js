import bcrypt  from "bcryptjs"
import jwt  from "jsonwebtoken"
import User from "../models/userModel.js"


// register
export const registerUser = async(req, res) => {

    const { fullName, email, password } = req.body

    if (!fullName || !email || !password) {
        res.status(400)
    }

    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400).json({
            message: "User already exists"
        })
    }

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        fullName,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            fullName: user.fullName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
    }

}


// login
export const loginUser = async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            fullName: user.fullName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({
            message: "invalid credentials"
        })
    }
}


// get user 
export const getUser = async(req, res) => {
   const { _id, fullName, email } = await User.findById(req.user.id)
   
   res.status(200).json({
    id: _id,
    fullName,
    email,
    password
   })
}


//generate toker
export const SECRET_KEY = "a1b2"
const generateToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, {
        expiresIn: "7d"
    })
}