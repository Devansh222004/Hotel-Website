
const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  checkIn: Date,
  checkOut: Date,
  adults: Number,
  children: Number,
  rooms: Number,
  email: String
});
module.exports = mongoose.model('Booking', BookingSchema);
