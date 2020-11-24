import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyCIsfihq7rDS6I8V0L_B7GwjTLX2sbpCQQ",
    authDomain: "pallav-crud.firebaseapp.com",
    databaseURL: "https://pallav-crud.firebaseio.com",
    projectId: "pallav-crud",
    storageBucket: "pallav-crud.appspot.com",
    messagingSenderId: "985029818989",
    appId: "1:985029818989:web:f370e0644796c21a709d64",
    measurementId: "G-83395RBF6H"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);


export default fireDb.database().ref();