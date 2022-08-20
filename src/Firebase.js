import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD2CxzLbxOIpNdAeoCbefyPOX15fFRBT-4",
    authDomain: "drivein-d7506.firebaseapp.com",
    projectId: "drivein-d7506",
    storageBucket: "drivein-d7506.appspot.com",
    messagingSenderId: "630630056678",
    appId: "1:630630056678:web:190806b54b6bb7d628b127"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export { auth , provider, storage, db}