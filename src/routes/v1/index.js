const express = require('express');

const router = express.Router();

const  infoController  = require('../../controllers')

router.get('/info',infoController.Infocontroller.info);

module.exports = router;