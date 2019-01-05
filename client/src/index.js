import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDPjSPxYq8G0tf1AkFQM0ldDXUaWNGnqR8",
    authDomain: "moravian-395c6.firebaseapp.com",
    databaseURL: "https://moravian-395c6.firebaseio.com",
    projectId: "moravian-395c6",
    storageBucket: "moravian-395c6.appspot.com",
    messagingSenderId: "984765627250"
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
