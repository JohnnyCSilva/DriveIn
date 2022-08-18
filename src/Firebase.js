import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD2CxzLbxOIpNdAeoCbefyPOX15fFRBT-4",
    authDomain: "drivein-d7506.firebaseapp.com",
    projectId: "drivein-d7506",
    storageBucket: "drivein-d7506.appspot.com",
    messagingSenderId: "630630056678",
    appId: "1:630630056678:web:190806b54b6bb7d628b127"
  };

  const app = initializeApp(firebaseConfig);

  const auth = app.auth()
  const provider = new app.auth.GoogleAuthProvider()
  const storage = app.storage()
  const db = app.firestore()

  export { auth , provider, storage, db}