const nodemailer = require('nodemailer');

const transporte = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: 'ssl',
    auth: {
        user: "no-reply@rawedabou.com",
        pass: "enviomasivo"
    }
})

export default transporte;