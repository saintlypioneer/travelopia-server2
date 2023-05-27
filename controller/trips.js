const router = require('express').Router();
const { Trip } = require('../model/trip');

router.get('/', async (req, res) => {
    const trips = await Trip.find();
    res.send(trips);
});

router.post('/', async (req, res) => {
    const trip = new Trip({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
        travellerCount: req.body.travellerCount,
        budget: req.body.budget,
    });

    await trip.save();
    res.send(trip);
});

module.exports = router;