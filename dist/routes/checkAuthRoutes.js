"use strict";const { Router } = require('express');
const CheckAuthController = require('../controllers/CheckAuthController.js');

const router = new Router();

router.get('/', CheckAuthController.check);

module.exports = router