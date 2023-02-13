import express from 'express'
import { getUser, loginUser, registerUser } from "../controllers/user.js"
import { protect } from '../middleware/authenticationMiddleware.js'

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/me', protect, getUser)

export default router;