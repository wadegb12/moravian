import {db} from "../firebase"

// /const nodemailer = require('nodemailer')

const postFormData = (data) => {

    db.collection("quotes").add({
        // timestamp: `${Date.now()}`,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        location: data.location,
        eventType: data.eventType,
        guestCount: data.guestCount,
        barType: data.barType,
        date: data.date,
        startTime: data.startTime,
        startTimeAmPm: data.startTimeAmPm,
        endTime: data.endTime,
        endTimeAmPm: data.endTimeAmPm
    })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
}

export default postFormData
