import Mailer from '../Library/Mailer';
import LogEmail from '../Entities/LogEmail';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';

const getTemplate = (itemEmail) => {

    const filePath = path.join(__dirname, '../../views/email/MailSubscription.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        email: itemEmail.email,
        name: itemEmail.name,
        last_name: itemEmail.last_name
    }
    const htmlToSend = template(replacements);

    return htmlToSend;
}

export const MailSubscription = (itemEmail) => {

    const mailOptions = {
        from: "no-reply@rawedabou.com",
        to: "hola@rawedabou.com",
        subject: "Asunto",
        html: getTemplate(itemEmail)
    }
    
    return new Promise((resolve, reject) => {

        Mailer.sendMail(mailOptions, (error, info) => {

            if(error){
                const newLog = new LogEmail(error)
                
                newLog.save();
                reject(error);
            }
            else{
                const newLog = new LogEmail(info)
                
                newLog.save();
                resolve(info)
            }
        })
    })
}

export default MailSubscription;