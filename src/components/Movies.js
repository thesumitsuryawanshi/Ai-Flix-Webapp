import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getDatabase, ref, onValue, set } from "firebase/database";
import Card from "../reddit_Components/Card";

function Movies() {
  const firebaseConfig = {
    apiKey: "AIzaSyDuoPwHRZ_T5IcivnhBcel1guYgcUe0dJ0",
    authDomain: "ai-flix-678f3.firebaseapp.com",
    projectId: "ai-flix-678f3",
    storageBucket: "ai-flix-678f3.appspot.com",
    messagingSenderId: "393754793668",
    appId: "1:393754793668:web:c5f14ac85f353701c55b91",
  };
  // initializeApp(firebaseConfig);


  const db = getFirestore();
  const colRef = collection(db, "Movies");

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let MovieDataArray = [];
      snapshot.docs.forEach((doc) => {
        MovieDataArray.push({ ...doc.data(), id: doc.id });
      });

      // Sort the trending data in descending order based on the score
      const sortedMoviesData = sortMoviesByScoreDescending(MovieDataArray);
      setMovieData(sortedMoviesData);
    });

    return () => {
      // Clean up the real-time data listener
      unsubscribe();
    };
  }, []);

  function UpVoteClick(index) {
    const updatedMovieData = [...movieData];
    updatedMovieData[index].score++;

    // Sort the movie data in descending order based on the score
    const sortedMovieData = sortMoviesByScoreDescending(updatedMovieData);
    setMovieData(sortedMovieData);

    // Update the score in the Realtime Database
    const movieId = updatedMovieData[index].id;
    const scoreToUpdate = updatedMovieData[index].score;
    const movieDocRef = doc(db, "Movies", movieId);
    updateDoc(movieDocRef, { score: scoreToUpdate });
  }

  // Function to handle downvote click
  function DownVoteClick(index) {
    const updatedMovieData = [...movieData];
    updatedMovieData[index].score--;

    // Sort the movie data in descending order based on the score
    const sortedMovieData = sortMoviesByScoreDescending(updatedMovieData);
    setMovieData(sortedMovieData);

    // Update the score in the Realtime Database
    const movieId = updatedMovieData[index].id;
    const scoreToUpdate = updatedMovieData[index].score;
    const movieDocRef = doc(db, "Movies", movieId);
    updateDoc(movieDocRef, { score: scoreToUpdate });
  }

  // Function to sort movies in descending order based on score
  function sortMoviesByScoreDescending(movies) {
    return movies.slice().sort((a, b) => b.score - a.score);
  }

  return (
    <Container>
      <h1> Latest Movies </h1>
      <Content>
        {/* Sort movieData in descending order based on the score */}
        {movieData
          .slice()
          .sort((a, b) => b.score - a.score)
          .map((doc, index) => (
            <div key={doc.id}>
              <CardStyling>
                <Card 
                  title={doc.title}
                  videoUrl={doc.videoUrl}
                  desc={doc.desc}
                  score={doc.score}
                  upVoteClicked={() => UpVoteClick(index)}
                  downVoteClicked={() => DownVoteClick(index)}
                />
              </CardStyling>
            </div>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding: 0 0 26px;
`;

const CardStyling = styled.div``;

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
