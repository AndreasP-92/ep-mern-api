require('dotenv').config();
const signInUser = require('../service/middleware/signin')
let userCollection = {};



console.log(process.env.CONNECTED_DB)

switch (process.env.CONNECTED_DB) {
    case 'mysql':
        userCollection = require("./MysqlCollections/UserCollection")
        break;
    case 'mongo':
        userCollection = require("./MongoCollections/UserCollections")
        break;
    case 'neo4j':
        userCollection = require("./Neo4jCollection/UserCollection")
        break;
}

const createUser = async function (req, res) {
    const body = req.body
    console.log(body)

    res.status(200).json(await userCollection?.createUser(body));
};

const getAllUsers = async function (req, res) {
    const body = req.body;
    console.log(body)
    res.status(200).json(await userCollection?.getAllUsers());
};

const updateUser = async function (req, res) {
    const id = req.params.id
    const body = req.body
    console.log(body)
    res.status(200).json(await userCollection?.updateUser(body, id));
}

const getUserById = async function (req, res) {
    const id = req.params.id
    res.status(200).json(await userCollection?.getUserById(id));
}

const deleteUser = async function (req, res) {
    const id = req.params.id
    console.log(id)
    res.status(200).json(await userCollection?.deleteUser(id));
}

const login = async function (req, res) {
    const body = req.body;
    console.log(body)
    const validated = await userCollection?.validateUser(body);

    validated.success && validated.validPassword ?
        res.status(202).json({userId: validated?.userId, validPassword: validated?.validPassword, generatedToken: signInUser.generateToken(validated.id, body), msg: validated?.msg, })
        :
        res.status(401).json({validPassword: validated?.validPassword, msg: "Login error" + validated?.msg})

}

const verifyedUser = async function (req, res) {
    res.status(200).json({veryfied: true});
}

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById,
    login,
    verifyedUser
}