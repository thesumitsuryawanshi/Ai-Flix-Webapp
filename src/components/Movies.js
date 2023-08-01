import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";
import { Link, NavLink } from "react-router-dom";
import FetchingTable from "./FetchingTable";

import React, { useState, useEffect , useMemo } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { getDatabase, ref, onValue, set } from "firebase/database";
import Card from "../reddit_Components/Card";



function Movies() {
  const firebaseConfig = {
    apiKey: "AIzaSyAKA7_6wjny6zUBkEPEkrP0QD_hpkFf15c",
    authDomain: "disney-plus-clone-1abfb.firebaseapp.com",
    projectId: "disney-plus-clone-1abfb",
    storageBucket: "disney-plus-clone-1abfb.appspot.com",
    messagingSenderId: "205160206542",
    appId: "1:205160206542:web:f6048e6806d51bab6a409f",
    measurementId: "G-BQXJBF4HVM",
  };


  initializeApp(firebaseConfig);
  const db = getFirestore();
  const colRef = collection(db, "Movies");
  const dbRef = ref(getDatabase(), "Movies");

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    // Fetch movie data from Firestore
    getDocs(colRef)
      .then((snapshot) => {
        let MovieDataArray = [];
        snapshot.docs.forEach((doc) => {
          MovieDataArray.push({ ...doc.data(), id: doc.id });
        });
        setMovieData(MovieDataArray);
      })
      .catch((err) => {
        console.log("Something went wrong");
      });

    // Listen for updates in Realtime Database (scores)
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const updatedMovieData = movieData.map((movie) => {
          return { ...movie, score: data[movie.id]?.score || 0 };
        });
        setMovieData(updatedMovieData);
      }
    });
  }, []);
  // Function to handle downvote click (if required)
  function handleUpVoteClick(index) {
    const updatedMovieData = [...movieData];
    updatedMovieData[index].score++;
    setMovieData(updatedMovieData);

    // Update the score in the Realtime Database
    updateDoc(doc(db, "Movies", movieData[index].id), {
      score: updatedMovieData[index].score,
    });
  }


  return (
    <div>
     <Container>
        <h1> Latest Movies </h1>
        <Content>
          {movieData.map((doc, index) => (
            <div key={doc.id}>
              <Card
                title={doc.title}
                videoUrl={doc.videoUrl}
                desc={doc.desc}
                score={doc.score}
                upVoteClicked={() => handleUpVoteClick(index)}
                downVoteClicked={() => handleDownVoteClick(index)}
              />
            </div>
          ))}
        </Content>
      </Container>
    </div>
  );
}

export default Movies;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-gap: 25px;

  grid-template-columns: repeat(5, minmax(0, 1fr));
 
  @media (width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  
  @media screen and (max-width: 991px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.15);
  }
`;
