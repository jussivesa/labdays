import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui'
import * as config from './config/secret.json';

const fireapp = firebase.initializeApp({
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId
});

// FirebaseUI config.
const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // signInSuccessUrl: '',
    callbacks: {
        signInSuccess: () => false,
    },
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'http://localhost:3000/terms'
};

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

ReactDOM.render(<App firebase={fireapp} firebaseui={ui} firebaseConfig={uiConfig}/>, document.getElementById('root'));
registerServiceWorker();
