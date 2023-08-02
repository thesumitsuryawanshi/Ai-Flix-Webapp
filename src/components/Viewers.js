import styled from "styled-components";
import drama from '../assets/img slider/genres/drama.jpg'
import action from '../assets/img slider/genres/action.png'
import love_story from '../assets/img slider/genres/love_story.png'
import sci_fi from '../assets/img slider/genres/sci-fi.jpg'
import thriller from '../assets/img slider/genres/thriller.png'





const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src={sci_fi} alt="" />
       
      </Wrap>
      <Wrap>
        <img src={action} alt="" />
       
      </Wrap>
      <Wrap>
        <img src={thriller} alt="" />
        
      </Wrap>
      <Wrap>
        <img src={drama} alt="" />
      
      </Wrap>
      <Wrap>
        <img src={love_story} alt="" />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  padding: 210px;
  display: grid;
  grid-gap: 25px;
  gap: 45px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 5px;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    padding:0px;
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

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.15);
    
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;