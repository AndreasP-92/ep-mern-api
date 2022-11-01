const express = require('express');
const router = express.Router()
const User = require("../Model/User")

// Create user
router.post('/post', async (req, res) => {
    const data = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        postal: req.body.postal,
        number: req.body.number,
        password: req.body.password
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all users
router.get('/getAll', async (req, res) => {
    try {
        const data = await User.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;