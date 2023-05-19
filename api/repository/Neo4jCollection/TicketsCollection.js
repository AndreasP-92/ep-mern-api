const driver = require('../../startup/neo4j')
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
    }
}