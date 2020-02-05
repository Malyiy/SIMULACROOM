// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD59NnsR_vKkM-_Dc7wa_3hpQWpCuI1fWw",
    authDomain: "simu1acroom.firebaseapp.com",
    databaseURL: "https://simu1acroom.firebaseio.com",
    projectId: "simu1acroom",
    storageBucket: "simu1acroom.appspot.com",
    messagingSenderId: "50125508646",
    appId: "1:50125508646:web:c0da23830e8d6fc71556e7",
    measurementId: "G-1BE43LETNS"
};

// Initialize Firebase

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
var firebaseui = require('firebaseui');
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        }
    ]
});

firebase.initializeApp(firebaseConfig);