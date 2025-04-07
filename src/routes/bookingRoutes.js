const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// Create booking
router.post("/mybookings/create", bookingController.createBooking);

// Get all bookings
router.get("/mybookings", bookingController.getAllBookings);

module.exports = router;
