"use strict";const express = require('express')
const HomeController = require('../controllers/HomeController.js')

const router = new express.Router();

router.get('/', HomeController.index);

module.exports = router;
