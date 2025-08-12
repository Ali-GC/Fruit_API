const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const fruit = require("./fruits.json")

app.use(express.json())

const logger = require('./logger')

const { fruitsRouter } = require("./routes/fruits")

app.use(cors())
app.use(logger)
app.use("/fruits", fruitsRouter)

module.exports = {
  app
}