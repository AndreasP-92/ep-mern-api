const amqp = require("amqplib");

let channel, connection;

async function connectQueue() {   
    try {
        connection = await amqp.connect("amqp://172.20.0.2:5672");
        channel    = await connection.createChannel()
        
        await channel.assertQueue("test-queue")
        await channel.assertQueue("ticket-queue")
        
    } catch (error) {
        console.log(error)
    }
}

connectQueue()

async function sendData (data) {

    //send data to queue
    await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));

    //close the channel and connection

    await channel.close();
    await connection.close();
}

async function sendTicket (data) {

    //send data to queue
    await channel.sendToQueue("ticket-queue", Buffer.from(JSON.stringify(data)));

    //close the channel and connection

    await channel.close();
    await connection.close();
}

module.exports = {
    sendTicket
}