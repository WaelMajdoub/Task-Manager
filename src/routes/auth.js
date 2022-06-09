import express from "express";
const router = express.Router()
import User from '../model/User'
import nodemailer from "nodemailer"
import bcrypt from 'bcryptjs'

router.post('/login', (req, res) => {
    res.send('login')
})

router.post('/register', async (req, res) => {
    //recupérer les données du body
    const { username, email, password } = req.body

    //TODO: crypt the password
    
    const user = await User.create({ username, email, password })

    // TODO: Generate token

    //envoi du mail
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "1190c1f01a2671",
          pass: "ce245b466008af"
        }
      });

      // send mail with defined transport object
        /* let info = await transporter.sendMail({
            from: '"Imset Nabeul" <contact@imset-nabeul.tn>',
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Welcome to our plateforme", // plain text body
            html: `
            <div class="container">
                <div>
                    <div>
                        <div>
                            <div>
                                <h1>welcome ${username}</h1>
                            </div>
                        </div>
                    </div>
                </div>   
                </div>
            `,
        }); */

    res.send(user)
})



export default router