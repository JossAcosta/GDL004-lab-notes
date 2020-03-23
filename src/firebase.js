import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyBLE-dgZImtGnS-DPAS582Z2vLptsFl8Us",
    authDomain: "labnotes-4c088.firebaseapp.com",
    databaseURL: "https://labnotes-4c088.firebaseio.com",
    projectId: "labnotes-4c088",
    storageBucket: "labnotes-4c088.appspot.com",
    messagingSenderId: "1055902215333",
    appId: "1:1055902215333:web:93652f91371798b2d2b14c",
    measurementId: "G-6G9ZJ2NS36"
}

const fire= firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
// const settings = {timestampsInSnapshots: true};
// firebase.firestore().settings(settings);


firebase.firestore().settings({});

export default fire;
