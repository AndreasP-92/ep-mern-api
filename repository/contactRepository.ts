const RequestCollection = require('./Collections/RequestCollection')

const createRequest = async (req: any, res: any) =>{
    const body = req.body;
    console.log(body)

    res.json(await RequestCollection.insertRequest(body))
}

module.exports = {
    createRequest
}