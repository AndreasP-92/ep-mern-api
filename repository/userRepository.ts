const userCollection = require("./Collections/UserCollections")

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

module.exports = {
    createUser,
    getAllUsers
}