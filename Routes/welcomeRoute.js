const express = require("express");
const router = express.Router();
const welcomeController = require("../Controller/welcomeController");

// Welcome To express
router.get("/", welcomeController.welcome);
module.exports = router;