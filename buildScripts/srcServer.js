import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'

/* eslint-disable no-console */

const port = 3000
const app = express()
const compiler = webpack(config)
process.env.NODE_ENV = 'test'
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'))
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
