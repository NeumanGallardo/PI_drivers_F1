const express = require("express");
const router = express.Router();

const getDrivers = require('../controllers/getDrivers');
const getDriverById = require('../controllers/getDriverById');
const getDriversBy = require('../controllers/getDriversByName');
const postDriver = require("../controllers/postDriver");
const getTeams= require('../controllers/getTeams');

router.get('/drivers_F1',getDrivers);
//router.get('/drivers_F1/:id',getDriverById);
router.get('/drivers_F1/name/:name',getDriversBy);
router.post('/drivers_F1',postDriver);
router.get('/drivers_F1/teams',getTeams);

module.exports = router;
