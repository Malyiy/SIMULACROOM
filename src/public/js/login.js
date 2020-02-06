

auth.onAuthStateChanged(user => {
if (user) window.location = 'ready.html';
});

const authForm = document.querySelector('#signup-form');
authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = authForm['signup-email'].value;
    const password = authForm['signup-password'].value;



    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');

        M.Modal.getInstance(modal).close();
        authForm.reset();
    })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                try {
                    auth.signInWithEmailAndPassword(email, password).then((cred) => {
                        console.log(cred.user);
                        const modal = document.querySelector('#modal-signup');
                        M.Modal.getInstance(modal).close();
                    })
                } catch (err) {
                    console.log(`Email address ${this.state.email} already in use.`);
                }
            } else {
                console.log(error)
            }
        });

    //     .catch(error => {
    //         switch (error.code) {
    //             case 'auth/email-already-in-use':
    //                 try {auth.signInWithEmailAndPassword(email, password).then((cred) => {
    //                     console.log(cred.user);
    //                     // close the signup modal & reset form
    //                     const modal = document.querySelector('#modal-signup');
    //                     M.Modal.getInstance(modal).close();
    //                 }
    //                 catch (err)
    //                     {
    //                         console.log(`Email address ${this.state.email} already in use.`);
    //                     }
    //             case 'auth/invalid-email':
    //                 console.log(`Email address ${this.state.email} is invalid.`);
    //             case 'auth/operation-not-allowed':
    //                 console.log(`Error during sign up.`);
    //             case 'auth/weak-password':
    //                 console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
    //             default:
    //                 console.log(error.message);
    //         }

} );



// import firebase from "firebase";
// import firebaseui from "firebaseui";
//
//
// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
// });
//
// // var ui = new firebaseui.auth.AuthUI(firebase.auth());
// //
// // var uiConfig = {
// //     callbacks: {
// //         signInSuccessWithAuthResult: function(authResult, redirectUrl) {
// //             // User successfully signed in.
// //             // Return type determines whether we continue the redirect automatically
// //             // or whether we leave that to developer to handle.
// //             return true;
// //         },
// //         uiShown: function() {
// //             // The widget is rendered.
// //             // Hide the loader.
// //             document.getElementById('loader').style.display = 'none';
// //         }
// //     },
// //     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
// //     signInFlow: 'popup',
// //     signInSuccessUrl: '<url-to-redirect-to-on-success>',
// //     signInOptions: [
// //         // Leave the lines as is for the providers you want to offer your users.
// //         firebase.auth.EmailAuthProvider.PROVIDER_ID,
// //     ],
// //     // Privacy policy url.
// //     // TODO: privacyPolicyUrl: '<your-privacy-policy-url>'
// // };
// //
// // // The start method will wait until the DOM is loaded.
// // ui.start('#firebaseui-auth-container', uiConfig);