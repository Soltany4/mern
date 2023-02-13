import bodyParser from "body-parser"
import cors from 'cors'
import express from 'express'
import { connectDB } from "./config/db.js"
import { errorHandler } from "./middleware/errorMiddleware.js"
import  employeeRoutes  from "./routes/employeeRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()
const PORT = 8080

connectDB()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
  }))

app.use(cors())

app.use(errorHandler)

app.use('/employee', employeeRoutes)
app.use('/users', userRoutes)


app.listen(PORT)


app.get("/", (req, res) => {
    res.send("ok")
})
