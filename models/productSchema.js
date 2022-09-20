const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
