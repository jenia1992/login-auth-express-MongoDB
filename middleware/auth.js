const jwt = require("jsonwebtoken")
const keys = require("../config/key")
module.exports = (req, res, next) => {
    let token = req.header("token")
    try {
        jwt.verify(token, keys.SECRET)
        next()
    } catch (error) {
        res.status(400).send()
    }
  
}

