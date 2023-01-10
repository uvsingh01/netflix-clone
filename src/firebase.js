// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZFJ6r1qjqnfnHJwsvnWXV0o7CmpQ4ebo",
  authDomain: "netflix-clone-fecbd.firebaseapp.com",
  projectId: "netflix-clone-fecbd",
  storageBucket: "netflix-clone-fecbd.appspot.com",
  messagingSenderId: "751409130250",
  appId: "1:751409130250:web:f6d5db4cb4f352efdd28f3",
  measurementId: "G-8TDNP1YY1H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
