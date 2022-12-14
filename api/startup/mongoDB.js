const mongoose = require("mongoose");
// const config = require("../config/default.json");
// const db = config.get("db");
require('dotenv').config();

// async example
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTIONSTRING, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectDB;

