const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err,account) => {
        const htmlEmail = `
            <ul>
                <li>First Name: ${req.body.firstName}</li>
                <li>Last Name: ${req.body.lastName}</li>
                <li>Email: ${req.body.email}</li>
                <li>Location: ${req.body.location}</li>
                <li>Type of Even: ${req.body.eventType}</li>
                <li>Guest Count: ${req.body.guestCount}</li>
                <li>Type of Bar: ${req.body.barType}</li>
                <li>Date: ${req.body.date}</li>
                <li>Start Time: ${req.body.startTime} ${req.body.startTimeAmPm}</li>
                <li>End Time: ${req.body.endTime} ${req.body.endTimeAmPm}</li>
                <li>Comments: ${req.body.comments}</li>
            </ul>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'hsrre3sq66yjelys@ethereal.email',
                pass: 'Fgb4qSgjJHdRGvBSEk'
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'hsrre3sq66yjelys@ethereal.email',
            replyto: 'test@testaccount.com',
            subject: 'Quote Requested',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                return console.log(err)
            }

            console.log('Message sent: %s', info.message)
            console.logt('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}')
})