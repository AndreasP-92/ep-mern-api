const elasticLogs = require('../repository/Collections/elasticCollection')

const getLogs = async function (req,res){
    elasticLogs.getElasticLogs(req.body)
    res.send("OK")
}

module.exports = {
    getLogs
}