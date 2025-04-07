const MyBooking = require("../models/myBookingsModel");

// Create a new booking
const createBooking = async (req, res) => {
    const { hoardingDimension, hourlyRate, date, hoardingId, userId } = req.body;

    try {
        const booking = new MyBooking({
            hoardingDimension,
            hourlyRate,
            date,
            hoardingId,
            userId
        });

        await booking.save();
        res.status(201).json({ message: "Booking saved successfully", booking });
    } catch (error) {
        res.status(500).json({ message: "Error saving booking", error });
    }
};

// Get all bookings
// const getAllBookings = async (req, res) => {
//     try {
//         const bookings = await MyBooking.find().populate("hoardingId userId");
//         res.status(200).json(bookings);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching bookings", error });
//     }
// };


const getAllBookings = async (req, res) => {
    try {
        const bookings = await MyBooking.find().populate("userId"); 
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Fetching bookings failed:", error);
        res.status(500).json({ message: "Error fetching bookings", error: error.message });
    }
};

module.exports = {
    createBooking,
    getAllBookings
};
