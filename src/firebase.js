import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDRE8CQwb0RC5pbv57fAgE-b0UO9Qw5hkQ",
    authDomain: "clone-a22b2.firebaseapp.com",
    projectId: "clone-a22b2",
    storageBucket: "clone-a22b2.appspot.com",
    messagingSenderId: "570391920518",
    appId: "1:570391920518:web:bc8b28188e68036cb1b607",
    measurementId: "G-BHY0WVE94C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };