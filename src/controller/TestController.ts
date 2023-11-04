import {CarPart} from "../entity/CarPart";
import {AppDataSource} from "../data-source";

const express = require('express');
const router = express.Router();

router.post('/car-part', async (req, res) => {
    try {
        const carPartRepository = AppDataSource.getRepository(CarPart);

        // Create a new CarPart object from the request body
        const newCarPart = carPartRepository.create(req.body);

        // Save the new CarPart to the database
        await carPartRepository.save(newCarPart);

        res.status(201).json(newCarPart);
    } catch (err) {
        console.error('Error creating data:', err);
        res.status(500).json({error: 'Internal server error'});
    }
});

module.exports = router;
