const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000


app.use(express.json())

const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB connection established successfully')
})


const covidRouter = require('./routes/data_maintenace.route')
const operationRouter = require('./routes/operation.route')
app.use('/covid', covidRouter)
app.use('/covid', operationRouter)

app.listen(port, () => {
    console.log(`Node Server is running on localhost: ${port}`)
})

