const User = require("../models/User")
const {UnauthenticatedError} = require("../errors/index")
const jwt = require("jsonwebtoken")
const auth = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        throw new UnauthenticatedError("Authentication failed")
    }

    const token = authHeader.split(" ")[1]
    try {
       const isValid = jwt.verify(token, process.env.JWT_SECRET)
       req.user = { userId: isValid.userId, name: isValid.name}
       next()
    } catch (error) {
        throw new UnauthenticatedError("Authentication failed")
    }

}
module.exports = auth