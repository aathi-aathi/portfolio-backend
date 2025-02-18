import express from 'express'
import { mailOptions, transporter } from './mail-utils.js'

const mailRouter = express.Router()
mailRouter.post('/',async(req,res)=>{
    const userData = req.body
    console.log(userData)
   await transporter.sendMail({
    ...mailOptions,
    from:userData.email,
    text:`Name: ${userData.name}
    Contact Number: ${userData.phone}
    Email: ${userData.email}
    Message: ${userData.message}`
})
 res.send(userData)
})
export default mailRouter;