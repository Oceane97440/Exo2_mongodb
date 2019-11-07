var router = require('express').Router();

var userController = require('../controllers/userController')

router.get('/', userController.index);


module.exports = router;