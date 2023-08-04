import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuoPwHRZ_T5IcivnhBcel1guYgcUe0dJ0",
  authDomain: "ai-flix-678f3.firebaseapp.com",
  databaseURL: "https://ai-flix-678f3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ai-flix-678f3",
  storageBucket: "ai-flix-678f3.appspot.com",
  messagingSenderId: "393754793668",
  appId: "1:393754793668:web:c5f14ac85f353701c55b91"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = getStorage();
  const storageRef = ref(storage);


  // Import the functions you need from the SDKs you need
  const app = initializeApp(firebaseConfig);
  
  export { auth, provider, storageRef };
  export default db;

// ------------------------------------------------------------
// old config 
// const firebaseConfig = {
//   apiKey: "AIzaSyAKA7_6wjny6zUBkEPEkrP0QD_hpkFf15c",
//   authDomain: "disney-plus-clone-1abfb.firebaseapp.com",
//   databaseURL: "https://disney-plus-clone-1abfb-default-rtdb.firebaseio.com",
//   projectId: "disney-plus-clone-1abfb",
//   storageBucket: "disney-plus-clone-1abfb.appspot.com",
//   messagingSenderId: "205160206542",
//   appId: "1:205160206542:web:f6048e6806d51bab6a409f",
//   measurementId: "G-BQXJBF4HVM"
// };a