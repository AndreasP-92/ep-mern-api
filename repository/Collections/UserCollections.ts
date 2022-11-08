const User = require("../../Model/User")

module.exports = {
    createUser: async (body: any) => {
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
    },

    updateUser: async (body: any, userId:string) => {
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

    deleteUser: async (userId:string) => {
        try {
            const data = await User.delete(userId);

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