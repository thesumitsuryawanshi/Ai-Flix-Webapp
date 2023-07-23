import React from 'react'
import logo from '../assets/logo.png';
import styled from 'styled-components'

function Advertisement() {
  return (

    <>
      <Section>
        <Container>

        <FooterBrand><img src={logo} height="190px" width="300px" alt='Ai Flix Logo'/></FooterBrand>

          <ImageIndore>
          </ImageIndore>

          <TextInfo>
            <p>Get The AiFlix Subscription to Stream the best movies, shows,and sports with AiFlix+, HULU and ESPN+.
               <br/> Terms & conditions Apply</p>
            <button type='button' className='btn-theme-disney'>Explore more </button>
          </TextInfo>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  position: relative;
  padding: 35px 5%;
  background: transparent;
`;

const Container = styled.div`
  // width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #f9f9f9;
  padding: 35px 5%;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    padding: 25px 35px;
    justify-content: center;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    padding: 25px 15px;
    text-align: center;
  }
`;

const ImageIndore = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;

  @media screen and (max-width: 991px){
    width: 100%;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    object-fit: contain;
    object-position: center;
  }
`;

const TextInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;

  @media screen and (max-width: 991px){
    width: 100%;
  }

  p{
    font-size: 1rem;

    @media screen and (max-width: 991px){
      font-size: .95rem
    }
  }
`;

const FooterBrand = styled.div`
text-align: center;

  img {
    width: 10rem;
    height: auto;
    object-fit: fill;

    @media screen and (max-width: 500px) {
      width: 7rem;
    }
  }
`;

export default Advertisement