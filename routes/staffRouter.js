const express = require('express')
const Staff = require('../models/staffMemberSchema')
const Product = require('../models/productSchema')
const CustomerInvoice = require('../models/customerInvoiceSchema')
const storeInvoice = require('../models/storeInvoiceSchema')
const StoreInvoice = require('../models/storeInvoiceSchema')
const Location = require('../models/locationSchema')
const router = new express.Router()

router.post('/staffs', async (req, res) => {
  const staff = new Staff(req.body)
  try {
    await staff.save()
    res.status(201).send(staff)
  } catch (e) {
    res.status(400).send(e)
  }
})

//cutomer Invoice
router.post('/staffs/customerInvoice', async (req, res) => {
  const products = await Product.find({})
  const customerInvoice = new CustomerInvoice({
    ...req.body,
    selectProduct: products,
  })
  try {
    await customerInvoice.save(), res.status(201).send(customerInvoice)
  } catch (e) {
    res.status(400).send(e)
  }
  res.send(customerInvoice)
})

//store invoice
router.post('/staffs/storeInvoice', async (req, res) => {
  const shops = await Location.find({})
  const products = await await Product.find({})
  const storeInvoice = new StoreInvoice({
    ...req.body,
    receivedOnShop: shops,
    selectProduct: products,
  })
  try {
    await storeInvoice.save()
    res.status(201).send(storeInvoice)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
