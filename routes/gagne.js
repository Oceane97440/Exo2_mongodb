var router = require('express').Router();

var gagneController = require('../controllers/userController')

router.get('/', gagneController.tirageindex);
//router.post('/add', gagneController.save);


module.exports = router;