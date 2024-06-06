
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.post('/createUser', userController.createUser);
router.get('/findUser', userController.findUser);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.get('/updateRole/:id', userController.roleUser);

module.exports = router;
