const rabbitMQ = require('../../../startup/rabbitMQ');

//Send data
// async function sendDataService(req, res){
//     const data = {
//         title   : "Six of Crows",
//         author  : "Leigh Burdugo"
//     }
//     rabbitMQ.sendData(data);  //pass the data to the function

//     console.log("A message is sent to queue")
//     res.send("Message Sent") //response to the API request
// }

async function createTicketService(req,res){
    const body = req.body;
    const data = {
        firstname : body.firstname,
        email     : body.email,
        msg       : body.msg
    }

    rabbitMQ.sendTicket(data);

    console.log("A message is sent to queue")
    res.send("Message Sent")
}

module.exports = {
    createTicketService
}