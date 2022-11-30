const jwt = require('jsonwebtoken')
require('dotenv').config();

const generateToken = (id: string, body: any) => {
    const token = jwt.sign({id: id}, body.key, {
        expiresIn: 86400
    });

    return token;
}

module.exports = {
    generateToken
}

export { };