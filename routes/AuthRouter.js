const express = require("express");
const { signIn, refreshToken } = require("../controllers/AuthControllers.js");
const router = express.Router();

router.post("/signin", signIn);

router.post("/refresh", refreshToken);

module.exports = router;
