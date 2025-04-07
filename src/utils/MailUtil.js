const mailer = require('nodemailer');

///function

const sendingMail = async(to,subject,text) => {

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth:{
            user:"mehtadhruvesh2907@gmail.com",
            pass:"waws xrag rwco bmnx"
        }
    })

    const mailOptions = {
        from: 'mehtadhruvesh2907@gmail.com',
        to: to,
        subject: subject,
        // text: textz
        html :text
    }

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(mailresponse);
    return mailresponse;

}

module.exports ={
    sendingMail
}