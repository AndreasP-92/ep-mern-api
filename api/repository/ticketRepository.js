const UserCollection = require('./Neo4jCollection/TicketsCollection');

require('dotenv').config();

const getAllTickets = async function (req, res) {
    const body = req.body;
    console.log(body)
    res.status(200).json(await UserCollection?.getAllTickets());
};

module.exports = {
    getAllTickets
}