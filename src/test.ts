import {AppDataSource} from "./data-source";
import {CarPart} from "./entity/CarPart";
const express = require('express');
const router = express.Router();
const connection = require('../db'); // Import your MySQL connection

// Retrieve data from the database
router.get('/data', (req, res) => {
  connection.query('SELECT * FROM car_part', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json(results);
  });
});

module.exports = router;


AppDataSource.initialize().then(async () => {

  console.log("Inserting a new user into the database...")
  const user = new CarPart()
  user.name = "Timber"
  user.description = "Saw"
  user.serialNumber = 25
  user.isAvailable = false
  await AppDataSource.manager.save(user)
  console.log("Saved a new user with id: " + user.id)

  console.log("Loading users from the database...")
  const users = await AppDataSource.manager.find(CarPart)
  console.log("Loaded users: ", users)

  console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

