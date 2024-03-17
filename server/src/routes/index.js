const express = require("express");
const router = express.Router();

const getDrivers = require('../controllers/getDrivers');
const getDriverById = require('../controllers/getDriverById');
const getDriversByName = require('../controllers/getDriversByName');

router.get('/drivers_F1',getDrivers);
router.get('/drivers_F1/:id',getDriverById);
router.get('/drivers_F1/name',getDriversByName);

module.exports = router;
