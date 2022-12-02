const db = require('../../startup/mysql')
const bcrypt = require("bcrypt");
const User = db.users

module.exports = {
    createUser : async (body)=>{

        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);

        const user = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            address: body.address,
            zipcode: body.postal,
            phone: body.number,
            password: body.password
        }
        
        try {
            const data = await User.create(user)

            return {
                success: true,
                object: data,
                msg: "",
                status: 200
            }

        } catch (error) {
            return {
                success: false,
                object: {},
                msg: "OOPS, something went wrong in createUser " + error,
                status: 405
            }
        }
    },
    getAllUsers: async () => {
        try {
            const data = await User.findAll();

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
    updateUser: async (body, userId) => {
        try {
            const data = await User.update(body, {where : {id : userId} });

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

    getUserById: async (userId) => {
        try {
            const data = await User.findOne({where: {id : userId}});

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

    deleteUser: async (userId) => {
        try {
            const data = await User.destroy({where: {id : userId}});

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