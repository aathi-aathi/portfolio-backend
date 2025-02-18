import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aathisharul48@gmail.com',
        pass: process.env.GMAIL_PASS || '',
    }
})
const mailOptions = {
    from:['aathiaathish32@gmail.com'],
    to:'aathisharul48@gmail.com',
    subject:'Doubt Clarification',
    text:'Sending Mails are so easy'
}

export {transporter,mailOptions}