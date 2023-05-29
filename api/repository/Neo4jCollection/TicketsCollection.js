const driver = require('../../startup/neo4j')
const uuid = require('uuid')

const session = driver.session();

module.exports = {
    getAllTickets: async () => {
        try {
            const result = await session.run(
                'MATCH (n:ticket) RETURN n'
            )
            const singleRecord = result.records
            const node = singleRecord

            return {
                success: true,
                object: node,
                msg: "",
                status: 200
            }
        } catch (e) {
            console.error(`Something went wrong: ${e}`);
        }
    },
    createResponse: async (data) => {
        const ticketId = data.ticketId
        const msg = data.msg

        console.log("ticketId: ", ticketId)
        console.log("msg: ", msg)

        try {
            const result = await session.run(
                'MATCH (a:ticket {id: $ticketId}) CREATE (a)-[:has]->(b:response {id: $id, msg: $msg}) RETURN a',
                {
                    id: uuid.v4(),
                    ticketId: ticketId,
                    msg: msg
                }
            )
            const singleRecord = result.records[0]
            const node = singleRecord.get(0)

            return {
                success: true,
                object: node,
                msg: "",
                status: 200
            }
        } catch (e) {
            console.error(`Something went wrong: ${e}`);
        }
    },
    getResponses: async () => {
        try {
            const result = await session.run(
                'MATCH (ticket)-[r]->(response) RETURN ticket, r, response'
            );

            const records = result.records;
            const relationships = [];

            for (const record of records) {
                const nodeA = record.get('ticket');
                const relationship = record.get('r');
                const nodeB = record.get('response');

                relationships.push({
                    nodeA: nodeA.properties,
                    relationship: relationship.properties,
                    nodeB: nodeB.properties
                });
            }

            return {
                success: true,
                relationships: relationships,
                msg: "",
                status: 200
            };
        } catch (e) {
            console.error(`Something went wrong: ${e}`);
        }
    }

} 