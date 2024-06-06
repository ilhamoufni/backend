const express = require('express');
const { signIn } = require('../controllers/AuthControllers.js');
const router = express.Router();

router.post('/signin', signIn);



module.exports=router;