const mongoose = require('mongoose')

const staffSchema = mongoose.Schema(
  {
    //name
    //mobile
    //email
    //staff id
    //staff role
    name: { type: String, required: true },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    staffId: {
      type: String,
      required: true,
      unique: true,
    },
    staffRole: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Staff = mongoose.model('Staff', staffSchema)

module.exports = Staff
