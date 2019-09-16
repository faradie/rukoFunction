const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.deleteUser = functions.firestore
    .document('users/{userID}')
    .onDelete((snap, context) => {
      return admin.auth().deleteUser(snap.id)
          .then(() => console.log('Berhasil hapus ' + snap.id))
          .catch((error) => console.error('Error hapus: ', error));
    });