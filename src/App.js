import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import * as firebase from 'firebase';
import './testing';

const config = {
    apiKey: "AIzaSyCJnYyyNsa328T7OEVM-slJzc3DaE1QmvM",
    authDomain: "intojs-api.firebaseapp.com",
    databaseURL: "https://intojs-api.firebaseio.com",
    projectId: "intojs-api",
    storageBucket: "intojs-api.appspot.com",
    messagingSenderId: "485708539226"
};

const app = firebase.initializeApp(config);

const email = 'danieldughila@gmail.com';
const password = 'b2f56d';


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log('The auth user', email);
    } else {
        // User is signed out
    }
});

firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
        console.log('user.email', user.email);
        console.log('user.uid', user.uid);
    })
    .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
    });

firebase
    .database(app)
    .ref("jobs")
    .on("child_added", function (snapshot) {
        console.log(snapshot.key);
        console.log(snapshot.toJSON());
    });

firebase.database(app)
    .ref("jobs/ee2ee0ca-0f62-45c3-9675-28a3dbb4d89c")
    .remove()
    .catch((error) => {
        console.log('remove error', error.message);
    });

// firebase.database().ref(`jobs/${uuid()}`).set({
//     title: 'Daniel',
//     description: 'dsada'
// });

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
