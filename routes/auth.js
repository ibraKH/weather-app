const express = require("express");
const controllers = require("../controllers/auth");
const router = express.Router();

router.post("/weather", controllers.weather);

module.exports = router;