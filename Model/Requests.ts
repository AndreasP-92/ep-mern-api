export { };
const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true,
        minlength: 3,
        maxLength: 50
    },
    email : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    msg : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 555
    }
})

const Request = mongoose.model("Requests", RequestSchema);

module.exports = Request