const express = require("express");
const {
  signIn,
  refreshToken,
  authLogout,
  forgetPassword,
} = require("../controllers/AuthControllers.js");
const router = express.Router();

router.post("/signin", signIn);

router.post("/refresh", refreshToken);

router.post("/forget-password", forgetPassword);

router.post("/logout", authLogout);

module.exports = router;
