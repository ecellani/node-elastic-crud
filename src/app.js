'use strict';

/**
 * Created by Erick Cellani
 */

var http = require('http')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var config = require('config')

var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'bower_components')))

// Controllers
app.use('/cursos', require('./controller/cursos'))

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send()
})

app.set('port', config.get('port'))

var server = http.createServer(app)

server.listen(config.get('port'))

server.on('error', function(error) {
    console.error(error)
})

server.on('listening', function() {
    console.info('listening port %s', config.get('port'))
})
