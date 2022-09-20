const express = require('express')

const Product = require('../models/productSchema')

const router = new express.Router()

//@desc add product
//@route /add-product

router.post('/add-product', async (req, res) => {
  const product = new Product(req.body)
  try {
    await product.save()
    res.status(201).send(product)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
