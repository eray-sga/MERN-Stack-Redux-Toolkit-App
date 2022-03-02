const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const goalRoutes = require("./routes/goalRoutes")
const userRoutes = require("./routes/userRoutes")
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const cors = require("cors")

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", goalRoutes)
app.use("/api/users", userRoutes)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))