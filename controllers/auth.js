const { BadRequestError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bc = require("bcryptjs");
const auth = require("../middleware/auth")

//register functionality
const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  return res
    .status(StatusCodes.CREATED)
    .json({user:{ name: user.name}, token});
};

//login functionality
const login = async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    throw new BadRequestError("Please provide email and password")
  }

  const user = await User.findOne({email});
  if(!user){
    return res.status(StatusCodes.NOT_FOUND).json({msg:"User not found"})
  }
  const token = user.createJWT();
  return res
  .status(StatusCodes.OK)
  .json({ user: user.name, token});

};
module.exports = {
  register,
  login,
};
