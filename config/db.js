const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const url_ = process.env.MONGO_URI
    const conn = await mongoose.connect(url_.toString(), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
