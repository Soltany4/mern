import jwt  from "jsonwebtoken"
import { SECRET_KEY } from "../controllers/user.js"
import User from "../models/userModel.js"

export const protect = async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {

        //get token from headers
        token = req.headers.authorization.split(" ")[1]

        //verify token with secret key
        const decoded = jwt.verify(token, SECRET_KEY)

        //get user from token
        req.user = await User.findById(decoded.id).select('-password')

        next()
            
        } catch (error) {
        
        console.log(error)
        res.status(401).json({
            message: "Not Othorized"
        })
    }

}

if (!token){
    res.status(401).json({
        message: "Not Othorized No token"
    })
}
}