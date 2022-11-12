const User = require("../../Model/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

module.exports = {
    createUser: async (body: any) => {

        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);

        const data = new User({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            address: body.address,
            postal: body.postal,
            number: body.number,
            password: body.password
        })

        try {
            const dataToSave = await data.save();

            return {
                success: true,
                object: dataToSave
            }
        }
        catch (error) {
            return {
                success: false,
                object: {},
                msg: "OOPS, something went wrong in createUser" + error,
                status: 405
            }
        }
    },

    getAllUsers: async (req: any, res: any) => {
        try {
            const data = await User.find();

            return {
                success: true,
                object: data
            }
        }
        catch (error) {
            return {
                success: false,
                object: {},
                msg: "OOPS, something went wrong in getAllUsers" + error,
                status: 405
            }
        }
    },

    updateUser: async (body: any, userId: string) => {
        try {
            const data = await User.update(userId, body);

            return {
                success: true,
                object: data
            }
        }
        catch (error) {
            return {
                success: false,
                Object: {},
                msg: "OOPS, something went wrong updateUser" + error,
                status: 405
            }
        }
    },

    getUserById: async (userId: string) => {
        try {
            const data = await User.findById(userId);

            return {
                success: true,
                object: data
            }
        }
        catch (error) {
            return {
                success: false,
                Object: {},
                msg: "OOPS, something went wrong getUserById" + error,
                status: 405
            }
        }
    },

    validateUser: async (body: any) => {
        try {
            const data = await User.findOne({email: body.email});

            const validPassword = await bcrypt.compare(body.password, data.password)

            return {
                validPassword: validPassword,
                success: true,
                object: data,
                msg: ""
            }
        }
        catch (error) {
            return {
                success: false,
                Object: {},
                msg: "OOPS, something went wrong validateUser" + error,
                status: 405
            }
        }
    },

    deleteUser: async (userId: string) => {
        try {
            const data = await User.deleteOne({userId});

            return {
                success: true,
                Object: data
            }
        }
        catch (error) {
            return {
                success: false,
                Object: {},
                msg: "OOPS, something went wrong UpdateUser" + error,
                status: 405
            }
        }
    }
}