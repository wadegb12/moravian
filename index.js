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
            service: 'gmail',
            auth: {
                user: 'wade.beall.dev@gmail.com',
                pass: 'bc74bf72273b60760749431836b3f6e7' //salt: wade
              }
        })

        let mailOptions = {
            to: 'wade.beall.dev@gmail.com',
            subject: 'Quote Requested',
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                // write to log
            }
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
})