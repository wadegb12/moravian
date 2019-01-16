const firebase = require("firebase");

var config = {
    apiKey: "AIzaSyDPjSPxYq8G0tf1AkFQM0ldDXUaWNGnqR8",
    authDomain: "moravian-395c6.firebaseapp.com",
    databaseURL: "https://moravian-395c6.firebaseio.com",
    projectId: "moravian-395c6",
    storageBucket: "moravian-395c6.appspot.com",
    messagingSenderId: "984765627250"
  };

firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  
  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });

  export {
      db
  }