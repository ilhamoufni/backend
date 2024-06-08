const express = require("express");
const {
  signIn,
  refreshToken,
  authLogout,
} = require("../controllers/AuthControllers.js");
const router = express.Router();

router.post("/signin", signIn);

router.post("/refresh", refreshToken);

router.post("/logout", authLogout);

module.exports = router;
