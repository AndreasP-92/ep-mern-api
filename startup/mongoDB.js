const mongoose = require('mongoose');
const config = require("config")

async function connect() {
    mongoose
        .connect(config.get("db"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Connected to MongoDB..."));

    mongoose.set("debug", true);
}

module.exports = connect