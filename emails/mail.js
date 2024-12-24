const nodemailer = require("nodemailer")

const sendemail = ( message,subject) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
        });




        const mailOptions = {
            from: process.env.EMAIL,
            to: "osport147@gmail.com",
            subject: subject,
            text: message,
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
               reject(error)
            } else {
               resolve(info.response)
            }
        });
    });

}
module.exports = sendemail