import React from 'react';
import styled from 'styled-components';
import coverImg from '../assets/Grid_Images/Cover_Image.png';

import AC_final from '../assets/Grid_Images/AC-final.jpg';
import NS_fotor from '../assets/Grid_Images/NS-fotor.png';
import PH_fotor from '../assets/Grid_Images/PH-fotor.png';

import QN_fotor from '../assets/Grid_Images/QN-fotor.png';
import SS_fotor from '../assets/Grid_Images/SS-fotor.png';
import WA_fotor from '../assets/Grid_Images/WA-fotor.png';

import KOALA from '../assets/Grid_Images/Koala-fotor.png';
import Cubie from '../assets/Grid_Images/Cubie.png';
import Machine from '../assets/Grid_Images/Machine.png';


const Stream_Exclusive = () => {


  return (
    <>
      <Section>
        <Container>
          <Tittle style={{ marginBottom: '100px' }}>
          <img src={coverImg}  height= '160px' width= '990px' alt='grid/img' />
            {/* <h2 className='disney-tittles'>Ai-Flix</h2> */}
        {/* ?    <p>An Flawless Creation of Webseries & Movies by Artificial intelligence <br/> & <br/> there collection only on Ai-Flix.</p> */}
          </Tittle>

          <GridImg>
          <Image ><img src={AC_final} alt='grid/img' /></Image>
          <Image ><img src={NS_fotor} alt='grid/img' /></Image>
          <Image ><img src={PH_fotor} alt='grid/img' /></Image>

          <Image ><img src={QN_fotor} alt='grid/img' /></Image>
          <Image ><img src={SS_fotor} alt='grid/img' /></Image>
          <Image ><img src={WA_fotor} alt='grid/img' /></Image>

          <Image ><img src={KOALA} alt='grid/img' /></Image>
          <Image ><img src={Cubie} alt='grid/img' /></Image>
          <Image ><img src={Machine} alt='grid/img' /></Image>
          </GridImg>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  padding: 5vh 0;
  position: relative;
  padding-bottom: 5%;

`;

const Container = styled.div`
  width: 95%;
---------------------------------------------


  padding:150px
`;

const Tittle = styled.div`
  text-align: center;
  margin-bottom: 3vh;

  p{
    font-size: 1ream;

    @media screen and (min-width: 550px){
      font-size: .8ream;
  }
  }
`;

const GridImg = styled.div`
  display: grid;
  gap: 15px 25px;
  
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width: 991px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const Image = styled.div`

  width: 100%;
  padding: 100px;
  border-radius: 0.24rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 1.65rem;
  }


`;


export default Stream_Exclusive