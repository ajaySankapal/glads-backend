const express = require('express')

const Location = require('../models/locationSchema')

const router = new express.Router()

//manage location
//add new location

//@DESC create a shop(location of the shop)
//@ROUTE /add/shop
router.post('/add/shop/location', async (req, res) => {
  const location = new Location(req.body)
  try {
    await location.save()
    res.status(201).send(location)
  } catch (e) {
    res.status(400).send(e)
  }
  console.log(req.body)
  res.send(req.body)
})

//@DESC fetch all the location
//@ROUTE /shops/location
//@ACCESS public
//get all the location of the shops
router.get('/shops/location', async (req, res) => {
  const locations = await Location.find({})
  res.json(locations)
})

module.exports = router
