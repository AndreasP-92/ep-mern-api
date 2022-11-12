const jwt = require('jsonwebtoken')
require('dotenv').config();

const generateToken = (id: string) => {
    const token = jwt.sign({id: id}, process.env.JWT_PRIVATE_KEY, {
        expiresIn: 86400
    });

    return token;
}

module.exports = {
    generateToken
}

export { };