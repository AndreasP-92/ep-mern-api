const mongoose = require('mongoose');

const SliderImage = mongoose.model(
    "SliderImage",
    new mongoose.Schema({
        url: {
            type: String,
            required : true
        }
    })
)

module.exports = SliderImage;