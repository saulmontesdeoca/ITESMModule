import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDk1FQmO4pk62z2ACRA8kgkbw0qvK5T6P8",
    authDomain: "itesmmodule.firebaseapp.com",
    databaseURL: "https://itesmmodule.firebaseio.com",
    projectId: "itesmmodule",
    storageBucket: "itesmmodule.appspot.com",
    messagingSenderId: "105546700181",
    appId: "1:105546700181:web:0fdbf176adb3ab0880129c",
    measurementId: "G-SMYBYNQS6M"
});

export default firebaseConfig;