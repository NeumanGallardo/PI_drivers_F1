const express = require("express");
const router = express.Router();

const getDrivers = require('../controllers/getDrivers');


router.get('/drivers_F1',getDrivers);

module.exports = router;
