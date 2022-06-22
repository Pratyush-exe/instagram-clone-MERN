import mongoose from "mongoose"
import cors from 'cors'
import express from 'express'
import bodyParser from "body-parser"
import dotenv from 'dotenv'
 
const app = express()
dotenv.config()
app.use(cors())

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`connected to DB on PORT:${PORT}`)))
    .catch((e) => console.log(e.message))