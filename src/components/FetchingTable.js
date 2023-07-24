import React, { useEffect, useState } from "react";
import {collection, getFirestore , getDocs} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

export default function FetchingTable() {

// const firebaseConfig = {
//   apiKey: "AIzaSyAKA7_6wjny6zUBkEPEkrP0QD_hpkFf15c",   
//   authDomain: "disney-plus-clone-1abfb.firebaseapp.com",
//   projectId: "disney-plus-clone-1abfb",
//   storageBucket: "disney-plus-clone-1abfb.appspot.com",
//   messagingSenderId: "205160206542",
//   appId: "1:205160206542:web:f6048e6806d51bab6a409f",
// };

// initializeApp(firebaseConfig)
// const  db = getFirestore()
// const colRef = collection(db,'TableData')

// getDocs(colRef)
// .then(( snapshot ) => { 
  
// let TableData = []

// snapshot.docs.forEach((doc)=> {
//   TableData.push({ ...doc.data(),id:doc.id})
//   })
// console.log(TableData)
// })
// .catch(err => {
//     console.log(err.messagingSenderId)
// })




  return (
    <div>
      <h1>Table Data</h1>
    </div>
  );

}