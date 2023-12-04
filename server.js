// +1 PONT
const express = require('express')
require('dotenv').config()
const trainings = require('./routes/trainings')

const mongoose = require('mongoose')
mongoose.set("strictQuery", true)
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection

const app = express()

app.use(express.json())

app.use('/api/trainings', trainings)

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`))

database.once("connected", () => {
    console.log(`Database to ${database.host} has been connected.`);
})