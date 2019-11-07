var router = require('express').Router();

var usersController = require('../controllers/userController')

router.get('/', usersController.index);


module.exports = router;