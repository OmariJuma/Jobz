// const jobs = require("../models")
const register = async(req,res)=>{
  return res.send("<h1>Register today</h1>")
}

const login = async (req, res)=>{
  return res.send("<h1>Login to continue</h1>")
}
module.exports = {
  register,
  login
}