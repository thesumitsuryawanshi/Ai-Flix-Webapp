import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";
import { Link, NavLink } from "react-router-dom";
import FetchingTable from "./FetchingTable";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
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

  const [MovieData, setMovieData] = useState([]);

  useEffect(() => {
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
  }, []);

  //-------------------------------------------- //Data ref or data manipulation //--------------------------------------------//
  // return (
  // <div>
  //   <h1>Trending Movies</h1>
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>Hero </th>
  //         <th>Suit color</th>
  //         <th>Img Url</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {MovieData.map((doc) => (
  //         <tr key={doc.id}>
  //           <td>{doc.Mname}</td>
  //           <td>{doc.suit_color}</td>
  //           <td>{doc.imgUrl}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // </div>

  //---------------------------------------/working code/---------------------------------------//
  // const movies = useSelector(selectRecommend);

  return (
    <div>
      <Container>
        <h1> Latest Movies List</h1>
        <Content>
          {MovieData.map((doc) => (
            <div>
            {/* <Wrap key={doc.id}>
              <img src={doc.imgUrl} alt={doc.MName} />
            </Wrap> */}
            
                <Card
                Mname={doc.MName}
                videoUrl={doc.videoUrl}
                Hcolor={doc.suit_color}
              />
              </div>
          ))}
        </Content>
      </Container>
       
    </div>
    //---------------------------------------//---------------------------------------//
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
