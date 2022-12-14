const requestSchema = require('../../Model/Requests');


module.exports = {
    insertRequest: async (body)=>{
        const requestObj = new requestSchema({
            firstname : body.firstname,
            email : body.email,
            msg : body.msg
        })

        try {
            const requestSaved = await requestObj.save();
            return{
                success: true,
                object: requestSaved,
                msg: '',
                status: 200
            }
        } catch (error) {
            return{
                success: false,
                object: {},
                msg: 'OOPS, something went wrong in insertRequest ' + error,
                status: 403
            }
        }
    }
}