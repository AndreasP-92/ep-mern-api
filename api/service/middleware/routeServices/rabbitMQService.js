const rabbitMQ = require('../../../startup/rabbitMQ');

async function createTicketService(req, res) {
    const body = req.body;
    const data = {
        firstname: body.firstname,
        email: body.email,
        msg: body.msg
    }

    rabbitMQ.sendTicket(data);

    console.log("A message is sent to queue")
    res.send("Message Sent")
}

module.exports = {
    createTicketService
}