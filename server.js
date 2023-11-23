// +1 PONT
const express = require('express')
require('dotenv').config()
const trainings = require('./routes/trainings')


const app = express()

app.use(express.json())
app.use('/api/trainings', trainings)

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`))