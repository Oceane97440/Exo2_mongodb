var router = require('express').Router();

var userController = require('../controllers/userController')

router.get('/', userController.index);
//router.post('/add', userController.save);


module.exports = router;