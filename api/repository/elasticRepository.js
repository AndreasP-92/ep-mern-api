const elasticLogs = require('../repository/Collections/elasticCollection')

const getLogs = async function (req,res){ 
    res.status(200).json(await elasticLogs.getElasticLogs(req.body))
}

module.exports = {
    getLogs
}