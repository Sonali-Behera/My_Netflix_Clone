import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBT-PLizr40wqRaJCqjKHPPsNwi3bGPO3o",
    authDomain: "my-netflix-clone-68997.firebaseapp.com",
    projectId: "my-netflix-clone-68997",
    storageBucket: "my-netflix-clone-68997.appspot.com",
    messagingSenderId: "932381888432",
    appId: "1:932381888432:web:9b00d07144e7ee6c7c5075"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;