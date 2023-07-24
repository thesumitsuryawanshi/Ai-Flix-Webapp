import React, { useEffect, useState } from "react";
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";



export default function FetchingTable() {

  const firebaseConfig = {
    apiKey: "AIzaSyAKA7_6wjny6zUBkEPEkrP0QD_hpkFf15c",   
    authDomain: "disney-plus-clone-1abfb.firebaseapp.com",
    projectId: "disney-plus-clone-1abfb",
    storageBucket: "disney-plus-clone-1abfb.appspot.com",
    messagingSenderId: "205160206542",
    appId: "1:205160206542:web:f6048e6806d51bab6a409f",
    measurementId: "G-BQXJBF4HVM"
  };
  

  initializeApp(firebaseConfig)
  const db = getFirestore()
  const colRef = collection(db, 'TableData')

  const [TableData, setTableData] = useState([]);

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let tableDataArray = [];
        snapshot.docs.forEach((doc) => {
          tableDataArray.push({ ...doc.data(), id: doc.id });
        });
        setTableData(tableDataArray);
      })
      .catch(err => {
        console.log("Something went wrong")
      });
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Release Year</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.title}</td>
              <td>{doc.director}</td>
              <td>{doc.releaseYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
