import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD4JRTGvL6ZgeEEp_aqHnScex__KbARbKI",
    authDomain: "fire-7086c.firebaseapp.com",
    projectId: "fire-7086c",
    storageBucket: "fire-7086c.appspot.com",
    messagingSenderId: "853842276854",
    appId: "1:853842276854:web:7569a968ed1f508d3517d7",
    measurementId: "G-T8S1WVM6FM"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();