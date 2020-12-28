const express = require('express')
const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/blogsite'
const app = express()
// const cors = require('cors')
const PORT = 4000
// app.use(cors())

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('🐘 Mongo is Connected')
  }
)

app.use((req, res, next) => {
  console.log(`🚨 Incoming Request: Method: ${req.method}  URL: ${req.url}`)
  next()
})

app.listen(PORT, function() {
  console.log('server is running on port: ' + PORT)
})