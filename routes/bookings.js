
const router = require('express').Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json("Booking confirmed");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
