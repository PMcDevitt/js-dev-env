import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'
/* eslint-disable no-console */

const port = 3000
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/users', function(req, res){
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@email.com"},
    {"id": 2, "firstName": "Bobby", "lastName": "Smiths", "email": "bobby@email.com"},
    {"id": 3, "firstName": "Bobbie", "lastName": "Smithy", "email": "bobbie@email.com"}
  ])
})

app.listen(port, function(err){
  if(err){
    console.error(err)
  } else {
    open('http://localhost:' + port)
  }
})
