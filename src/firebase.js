import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjvnOAO_haKD0rZEH2kgV4Pz1xAnDy5-U",
  authDomain: "talkto-720d3.firebaseapp.com",
  databaseURL: "https://talkto-720d3.firebaseio.com",
  projectId: "talkto-720d3",
  storageBucket: "talkto-720d3.appspot.com",
  messagingSenderId: "442421588660",
  appId: "1:442421588660:web:9eabb69ce6818af4349de1",
  measurementId: "G-2FBVCJ2PKM",
});

const db = firebaseApp.firestore();

export default db;
