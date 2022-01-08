import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBOCTkB35IM1WF_DgjU2ltAEkOh01h_P28",
    authDomain: "ecommerce-d43f8.firebaseapp.com",
    projectId: "ecommerce-d43f8",
    storageBucket: "ecommerce-d43f8.appspot.com",
    messagingSenderId: "903928730535",
    appId: "1:903928730535:web:d9ba5cb3dec19ad6329c82",
    measurementId: "G-Q6ZCXK1XFS"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signinWithPopup();

export default firebase;