import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAku6qRbPUZUQW_P38HsheZqz2SLoW7Oho",
    authDomain: "ipu-geek.firebaseapp.com",
    databaseURL: "https://ipu-geek-default-rtdb.firebaseio.com/",
    projectId: "ipu-geek",
    storageBucket: "ipu-geek.appspot.com",
    messagingSenderId: "434443268589",
    appId: "1:434443268589:web:62be49736def54ab7837e4",
    measurementId: "G-NMRJ62Y36D"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;