// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const cors = require('cors')({ origin: true });

admin.initializeApp();

exports.register = functions.https.onRequest((request: any, response: any) => {
  return cors(request, response, () => {

    if (request.method !== "POST") {
      response.status(400).send("Bad request");
      return 0;
    }

    const email = request.body.email;
    const pass = request.body.pass;

    admin.auth().createUser({
      email: email,
      emailVerified: true,
      password: pass,
    })
         .then(function (userRecord: any) {
           response.set({ 'Access-Control-Allow-Origin': '*' }).status(200).json({uid: userRecord.uid});
           return admin.auth().reset;
         })
         .then()
         .catch(function (error: any) {
           response.send("Error: " + error);
           console.log("Error creating new user:", error);
           return 1;
         });

    return 1;
  });
});
