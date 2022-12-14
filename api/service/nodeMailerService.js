const nodemailer = require('nodemailer');

const sendMail = (body)=>{
    // === TRANSPORTER DETAILS ===
    const authEmail = process.env.NODE_MAILER_MAIL;
    const authPass = process.env.NODE_MAILER_PASS;

    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com', // Office 365 server
        port: 587,     // secure SMTP
        secure: false,
        auth: {
            user: authEmail,
            pass: authPass
        },
        tls: {
            rejectUnauthorized: false
        }
        });

    let mailOptions = {
        from: `${process.env.NODE_MAILER_MAIL} <${process.env.NODE_MAILER_MAIL}>`,
        to: process.env.NODE_MAILER_MAIL,
        subject: `New contact request`,
        html:`<h3>${body.firstname} is trying to contact us</h3><br>
        <p>The message are following: ${body.msg}</p>
        `,
    };

    try {
            let success = true;
            let errorMsg = ''
            // === SEND REQUEST ===
            transporter.sendMail(mailOptions, function (err, res) {
                if(err){
                    success = false;
                    errorMsg = "OOPS SOMETHING WENT WRONG IN /send/newsletter " + err 
                }
            })
            return {
                object : {},
                success : success,
                msg : errorMsg,
                status : 200
            }        
    } catch (error) {
        // === RETURN ERROR ===
        return {
            object : {},
            success: false,
            msg     : "OOPS, something went wrong in /send/newsletter" + error,
            status  : 403
        }
    }
}

module.exports = {
    sendMail
}