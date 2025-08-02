
const router = require('express').Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const message = new Contact(req.body);
    await message.save();
    res.status(201).json("Message received");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
