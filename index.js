const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const shopRouter = require('./routes/shopRouter')
const adminRouter = require('./routes/adminRouter')
const productRouter = require('./routes/productRouter')
const Location = require('./models/locationSchema')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running successfully!!')
})

//shop routers
app.use(shopRouter)

//admin routers
app.use(adminRouter)

//product routers
app.use(productRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})
