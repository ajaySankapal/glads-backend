const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },
})

const Location = mongoose.model('Location', locationSchema)
module.exports = Location
