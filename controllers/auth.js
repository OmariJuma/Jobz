const { BadRequestError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bc = require("bcryptjs");

//register functionality
const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  await User.create({ name, email, password });

  return res
    .status(StatusCodes.CREATED)
    .json({ success: true, msg: "User created" });
};

//login functionality
const login = async (req, res) => {
  return res.send("<h1>Login to continue</h1>");
};
module.exports = {
  register,
  login,
};
