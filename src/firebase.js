// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUYea-Tlt2ctRKPInARSzsYBZ3Wh_dO3c",
  authDomain: "netflix-xlone-faad3.firebaseapp.com",
  projectId: "netflix-xlone-faad3",
  storageBucket: "netflix-xlone-faad3.appspot.com",
  messagingSenderId: "996086154663",
  appId: "1:996086154663:web:26832ca995abe77f996282",
  measurementId: "G-27ED4YCRMW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
