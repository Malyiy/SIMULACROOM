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