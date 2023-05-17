const jwt = require('jsonwebtoken')
require('dotenv').config();

const verify = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        console.log(token)
        return res.status(403).json({message: "No token provided", veryfied: false})
    }

    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({message: "Unauthorized " + error, veryfied: false})
        }
        req.userId = decoded._id
        next()
    })
}

module.exports = {
    verify
}