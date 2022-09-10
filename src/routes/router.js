const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.use('/', Controller.helloWorld);
router.get('/halo', Controller.sayHi)
module.exports = router;
