const express = require('express')
const Admin = require('../models/adminSchema')

const router = new express.Router()

//@desc create admin
//@route /admin

router.post('/admin', async (req, res) => {
  const admin = new Admin(req.body)
  try {
    await admin.save()
    res.status(201).send(admin)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
