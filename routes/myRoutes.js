const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

router.post('/home', homeController.createHome);
router.get('/homes', homeController.findAll);
router.get('/home/:idHome',homeController.findOne)
router.get('/homeandUser/:idHome',homeController.findOnewithUser)
router.patch('/home/:idHome', homeController.updateOneHome)
router.delete('/home/:idHome', homeController.destroyOneHome)
router.delete('/homes/:idHome', homeController.dilitOneHome)


router.post('/user', userController.createUser);
router.post('/user/login', userController.login);
router.get('/users', userController.findAll);
router.get('/user/:idUser',userController.findOne)
router.patch('/user/:idUser', userController.updateOneUser)
router.delete('/user/:idUser', userController.destroyOneUser)
router.delete('/users/:idUser', userController.dilitOneUser)

module.exports =router;