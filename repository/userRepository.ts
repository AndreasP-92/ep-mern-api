export = {}
const userCollection = require("./Collections/UserCollections")
const signInUser = require('../service/middleware/signin')

const createUser = async function (req: any, res: any) {
    const body = req.body
    console.log(body)
    res.status(200).json(await userCollection.createUser(body));
};

const getAllUsers = async function (req: any, res: any) {
    const body = req.body;
    console.log(body)
    res.status(200).json(await userCollection.getAllUsers());
};

const updateUser = async function (req: any, res: any) {
    const id = req.params.id
    const body = req.body
    console.log(body)
    res.status(200).json(await userCollection.updateUser(body, id));
}

const getUserById = async function (req: any, res: any) {
    const id = req.params.id
    res.status(200).json(await userCollection.getUserById(id));
}


const deleteUser = async function (req: any, res: any) {
    const id = req.params.id
    console.log(id)
    res.status(200).json(await userCollection.deleteUser(id));
}

const login = async function (req: any, res: any) {
    const body = req.body;

    const validated = await userCollection.validateUser(body);

    validated.validPassword ? res.status(202).json(validated, signInUser.generateToken(validated.id)) : res.status(401).json(validated)

}

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById,
    login
}