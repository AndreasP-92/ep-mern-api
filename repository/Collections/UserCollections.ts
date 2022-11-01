const User = require("../../Model/User")

module.exports = {
    createUser: async (body: any, res: any) => {
        const data = new User({
            firstName: body.firstName,
            lastName: body.lastName,
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
    }
}