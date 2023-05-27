const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String,
    travellerCount: Number,
    budget: Number,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = {Trip};