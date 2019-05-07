const mongoose = require('mongoose')

var datos = require('../config.js')

var connectionURL = datos.connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
