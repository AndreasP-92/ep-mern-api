const amqp = require("amqplib");

let channel, connection;

async function connectQueue() {
    try {
        if (process.env.ENVIRONTMENT == 'prod') {
            connection = await amqp.connect("amqp://20.240.169.172:5672");
        } else {
            connection = await amqp.connect("amqp://localhost:5672");
        }
        channel = await connection.createChannel()

        await channel.assertQueue("test-queue")
        await channel.assertQueue("ticket-queue")

    } catch (error) {
        console.log(error)
    }
}

connectQueue()

async function sendData(data) {

    //send data to queue
    await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));

    //close the channel and connection

    await channel.close();
    await connection.close();
}

async function sendTicket(data) {

    //send data to queue
    await channel.sendToQueue("ticket-queue", Buffer.from(JSON.stringify(data)));

    //close the channel and connection

    await channel.close();
    await connection.close();
}

module.exports = {
    sendTicket
}