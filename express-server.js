import express from 'express'
import mailRouter from './sendmail.js'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/send-mail',mailRouter)
const port = 8453
app.listen(port,()=>{
    console.log(port, 'is running...')
})