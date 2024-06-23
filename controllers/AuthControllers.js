const asyncHandler = require("express-async-handler");
const { User } = require("../models/index");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");
const dotenv = require("dotenv").config();

const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({
      message: "Email and password are required",
    });
  }

  const foundUser = await User.findOne({
    where: { email, password },
  });

  if (!foundUser) {
    return res.status(401).json({
      message: "Check your credentails",
    });
  }

  // create access token
  const accessToken = jwt.sign(
    {
      user: {
        email: foundUser.email,
        name: foundUser.name,
      },
      role: foundUser.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  // create refresh token
  const refreshToken = jwt.sign(
    {
      email: foundUser.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });

  res.json({
    user: foundUser,
    access_token: accessToken,
    refreshToken: refreshToken,
  });
});

const refreshToken = asyncHandler(async (req, res) => {
  const token = req.cookies.refresh_token;

  if (!token) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.sendStatus(403);

      const foundUser = await User.findOne({
        where: { email: decoded.email },
      });

      if (!foundUser) return res.sendStatus(401);

      // Create jwt access token
      const accessToken = jwt.sign(
        {
          user: {
            email: foundUser.email,
            name: foundUser.name,
          },
          role: foundUser.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );

      res.json({
        user: foundUser,
        access_token: accessToken,
      });
    })
  );
});

const forgetPassword = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({
      message: "Email is requird",
    });
  }

  try {
    const foundUser = await User.findOne({
      where: { email },
    });

    if (!foundUser) {
      return res.status(404).json({
        message: "No User Found with provider email",
      });
    }

    const updatedPassword = foundUser.update({
      password,
    });

    if (updatedPassword) {
      return res.json({
        message: "Password updated successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

const authLogout = asyncHandler(async (req, res) => {
  const token = req.cookies.refresh_token;

  if (!token) return res.sendStatus(403);

  res.clearCookie("refresh_token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  res.json({
    message: "Cookie cleared !",
  });
});

module.exports = {
  signIn,
  refreshToken,
  authLogout,
  forgetPassword,
};
