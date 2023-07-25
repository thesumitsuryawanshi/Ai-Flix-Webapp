import React from 'react'
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { selectHollywood } from '../features/movie/movieSlice';
import { NavLink } from 'react-router-dom';
import FetchingTable from "./FetchingTable";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import  { useEffect, useState } from "react";
import Card from "../reddit_Components/Card";


function TRENDING() {


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
      const colRef = collection(db, 'Trending')
    
      const [TrendingData, setTrendingData] = useState([]);
    
      useEffect(() => {
        getDocs(colRef)
          .then((snapshot) => {
            let TMovieDataArray = [];
            snapshot.docs.forEach((doc) => {
                TMovieDataArray.push({ ...doc.data(), id: doc.id });
            });
            setTrendingData(TMovieDataArray);
          })
          .catch(err => {
            console.log("Something went wrong")
          });
      }, []);
    


    

//---------------------------------------/working code/---------------------------------------//

return (

    <Container>
        <h4>Trending List</h4>
        
        {/* <FetchingTable/> */}

        <Content>
            {/* {
                TrendingData.map((doc) => (
                    <Wrap key={doc.id}>
                            <img src={doc.imgUrl} alt={doc.TMName} />
                    </Wrap>
                ))
            } */}

{TrendingData.map((doc) => (
            <div>
            {/* <Wrap key={doc.id}>
              <img src={doc.imgUrl} alt={doc.MName} />
            </Wrap> */}
            
                <Card
                title={doc.title}
                videoUrl={doc.videoUrl}
                desc={doc.desc}
                score={doc.score}

              />
              </div>
          ))}

        </Content>

    </Container>
    )
//---------------------------------------/working code/---------------------------------------//

    
}

const Container = styled.div`
    padding: 0 0 26px;
`

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
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;

export default TRENDING