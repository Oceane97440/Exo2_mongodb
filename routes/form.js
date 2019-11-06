var router = require('express').Router();

var formController = require('../controllers/userController')

router.get('/', formController.formindex);
router.post('/add', formController.save);


module.exports = router;