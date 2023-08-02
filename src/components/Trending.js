import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFirestore, collection, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import Card from '../reddit_Components/Card';

export default function Trending() {
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
  const colRef = collection(db, 'Trending');

  const [TrendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let TMovieDataArray = [];
      snapshot.docs.forEach((doc) => {
        TMovieDataArray.push({ ...doc.data(), id: doc.id });
      });
      
      // Sort the trending data in descending order based on the score
      const sortedTrendingData = sortTrendingByScoreDescending(TMovieDataArray);
      setTrendingData(sortedTrendingData);
    });

    return () => {
      // Clean up the real-time data listener
      unsubscribe();
    };
  }, []);


  // Function to handle upvote click
  function UpVoteClick(index) {
    const updatedTrendingData = [...TrendingData];
    updatedTrendingData[index].score++;

    // Sort the trending data in descending order based on the score
    const sortedTrendingData = sortTrendingByScoreDescending(updatedTrendingData);
    setTrendingData(sortedTrendingData);

    // Update the score in the Firestore
    const movieId = updatedTrendingData[index].id;
    const scoreToUpdate = updatedTrendingData[index].score;
    const movieDocRef = doc(db, 'Trending', movieId);
    updateDoc(movieDocRef, { score: scoreToUpdate });
  }

  // Function to handle downvote click
  function DownVoteClick(index) {
    const updatedTrendingData = [...TrendingData];
    updatedTrendingData[index].score--;

    // Sort the trending data in descending order based on the score
    const sortedTrendingData = sortTrendingByScoreDescending(updatedTrendingData);
    setTrendingData(sortedTrendingData);

    // Update the score in the Firestore
    const movieId = updatedTrendingData[index].id;
    const scoreToUpdate = updatedTrendingData[index].score;
    const movieDocRef = doc(db, 'Trending', movieId);
    updateDoc(movieDocRef, { score: scoreToUpdate });
  }

  // Function to sort trending data in descending order based on score
  function sortTrendingByScoreDescending(data) {
    return data.slice().sort((a, b) => b.score - a.score);
  }

  return (
    <Container>
    <h1>Trending List</h1>
    <Content>
      {TrendingData.map((doc, index) => (
        <div key={doc.id}>
          <Card
            title={doc.title}
            videoUrl={doc.videoUrl}
            desc={doc.desc}
            score={doc.score}
            upVoteClicked={() => UpVoteClick(index)}
            downVoteClicked={() => DownVoteClick(index)}
          />
        </div>
      ))}
    </Content>
  </Container>
  );
}

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

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
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
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
}`;