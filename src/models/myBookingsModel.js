const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    hoardingDimension: {
        type: String,
        required: true
    },
    hourlyRate: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    hoardingId: {
        type: Schema.Types.ObjectId,
        ref: 'Hording',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('MyBooking', bookingSchema);
