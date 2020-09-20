const nodemailer = require('nodemailer');
require('dotenv').config()

export const Mailer = nodemailer.createTransport({
    host: process.env.HOST_SMTP,
    port: process.env.PORT_SMTP,
    secure: process.env.SECURE_SMTP,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

export const setMailOptions = (options) => {
    return {
        from: process.env.SMTP_FROM,
        ...options,
    }
}