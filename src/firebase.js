import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXruGCwzza6HC7MuEHRIyIdws3P_lXtjM",
    authDomain: "instagram-2-e78bb.firebaseapp.com",
    projectId: "instagram-2-e78bb",
    storageBucket: "instagram-2-e78bb.appspot.com",
    messagingSenderId: "7106363419",
    appId: "1:7106363419:web:62f768f972af0fa2dc78be",
    measurementId: "G-FSVM2XLQYV"
  });

  const db = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const functions = firebase.functions()

  export {db, auth, storage, functions}