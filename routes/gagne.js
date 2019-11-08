var router = require('express').Router();

var gagneController = require('../controllers/userController')

router.get('/', gagneController.tirageindex);


module.exports = router;