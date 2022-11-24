export { }
const jwt = require('jsonwebtoken')
require('dotenv').config();

const verify = (req: any, res: any, next: any) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        console.log(token)
        return res.status(403).json({message: "No token provided"})
    }

    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (error: any, decoded: any) => {
        if (error) {
            return res.status(401).json({message: "Unauthorized " + error})
        }
        req.userId = decoded._id
        next()
    })
}

module.exports = {
    verify
}