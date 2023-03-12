const RequestCollection = require('./Collections/RequestCollection')
const NodeMailerService = require('../service/nodeMailerService.js')

// const createRequest = async (req, res) =>{
//     const body = req.body;
//     const sendMail = NodeMailerService.sendMail(body);

//     if(sendMail.success){
//         res.json(await RequestCollection.insertRequest(body));
//     }else{
//         res.json(sendMail);
//     }
// }

const createTicket = async (req,res)=>{
    const body = req.body;
    
}

module.exports = {
    createTicket
}