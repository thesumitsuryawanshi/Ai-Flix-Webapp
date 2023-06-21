import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2YmnegAvS8HeAria5MTWoRIIP5QXNvMw",
  authDomain: "instagram-clone-559d9.firebaseapp.com",
  databaseURL: "https://instagram-clone-559d9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "instagram-clone-559d9",
  storageBucket: "instagram-clone-559d9.appspot.com",
  messagingSenderId: "1040606593608",
  appId: "1:1040606593608:web:02ea8c2e99f752dda20e7d",
  measurementId: "G-SHQW9CMGHW"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = getStorage();
  const storageRef = ref(storage);

  export { auth, provider, storageRef };
  export default db;
