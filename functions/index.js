const functions = require('firebase-functions');
const admin = require('firebase-admin');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions
  .region('asia-northeast1')
  .https.onRequest((request, response) => {
    response.send('Hello from Firebase!');
  });

exports.byeWorld = functions
  .region('asia-northeast1')
  .https.onRequest((req, res) => {
    res.send('Bye from firebase...');
  });

// exports.newUserSignup = functions
//   .region('asia-northeast1')
//   .auth.user()
//   .onCreate(user => {
//     return admin
//       .firestore()
//       .collection('users')
//       .doc(user.uid)
//       .set({
//         email: user.email
//       });
//   });
