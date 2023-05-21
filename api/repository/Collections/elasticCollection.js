// const { Client } = require('@elastic/elasticsearch');
// const client = new Client({ node: 'https://ep.es.francecentral.azure.elastic-cloud.com' });
const scrollTime = '5m'; // Scroll time window
const client = require('../../startup/elastic')

module.exports = {
    getElasticLogs: async function(body){
        try {
            
            const longOnEmail = {
                "query": {
                  "term": {
                    "email.keyword": "daniel.lorenzen@hotmail.com"
                  }
                },
                "sort": [
                  {
                    "login_time": {
                      "order": "desc"
                    }
                  }
                ]
            }

            const body  = await client.search({
                index: 'rdbms_idx',
                body: longOnEmail
            })
            console.log(body.hits.hits)
            return {
                success: true,
                object: body.hits.hits
            }
  
        }catch (error) {
            console.log(error)
        }
    }
}