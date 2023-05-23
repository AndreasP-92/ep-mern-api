const UserCollection = require('./Neo4jCollection/TicketsCollection');

require('dotenv').config();

const getAllTickets = async function (req, res) {
    const body = req.body;
    console.log(body)
    res.status(200).json(await UserCollection?.getAllTickets());
};

const createResponse = async function (req, res) {
    const body = req.body;
    console.log(body)
    res.status(200).json(await UserCollection?.createResponse(body));
}

const getResponses = async function (req, res) {
    res.status(200).json(await UserCollection?.getResponses());
}

module.exports = {
    getAllTickets,
    createResponse,
    getResponses
}