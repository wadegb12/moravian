import {db} from "../firebase"

// /const nodemailer = require('nodemailer')

const postFormData = (data) => {

    db.collection("quotes").add({
        first: data.firstName,
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

export default postFormData
