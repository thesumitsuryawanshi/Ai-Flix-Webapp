import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKA7_6wjny6zUBkEPEkrP0QD_hpkFf15c",
    authDomain: "disney-plus-clone-1abfb.firebaseapp.com",
    databaseURL: "https://disney-plus-clone-1abfb-default-rtdb.firebaseio.com",
    projectId: "disney-plus-clone-1abfb",
    storageBucket: "disney-plus-clone-1abfb.appspot.com",
    messagingSenderId: "205160206542",
    appId: "1:205160206542:web:f6048e6806d51bab6a409f",
    measurementId: "G-BQXJBF4HVM"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = getStorage();
  const storageRef = ref(storage);
  export { auth, provider, storageRef };
  export default db;

  