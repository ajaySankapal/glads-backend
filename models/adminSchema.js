const mongoose = require('mongoose')
const validator = require('validator')

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid!')
      }
    },
  },
  adminId: {
    type: String,
    required: true,
  },
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
