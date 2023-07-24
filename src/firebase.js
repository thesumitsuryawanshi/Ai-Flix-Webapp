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

// //------------------------------------------------------------------------------------------------------------------------
// Import the functions you need from the SDKs you need
//  import { initializeApp } from "firebase/app";
//  import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyAKA7_6wjny6zUBkEPEkrP0QD_hpkFf15c",   
//    authDomain: "disney-plus-clone-1abfb.firebaseapp.com",
//    projectId: "disney-plus-clone-1abfb",
//    storageBucket: "disney-plus-clone-1abfb.appspot.com",
//    messagingSenderId: "205160206542",
//    appId: "1:205160206542:web:f6048e6806d51bab6a409f",
//    measurementId: "G-BQXJBF4HVM"
//  };

//  // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   const storage = getStorage();
//   const storageRef = ref(storage);

//   export { auth, provider, storageRef };
//   export default db;