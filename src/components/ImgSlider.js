import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import unicorn from '../assets/img slider/unicorn.png'
import dragonRobo from '../assets/img slider/firedragon.jpg'
import robo_in_space from '../assets/img slider/robo_in_space.png'
import space_flower from '../assets/img slider/space_flower.png'
import spaceship from '../assets/img slider/spaceship_in_space.png'
import ai_girl from '../assets/img slider/ai_girl.png'
import fighting from '../assets/img slider/fighting.png'

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };



    return (
        <Carousel {...settings}>
            <Warp >
                <img src={unicorn} alt='' />
            </Warp>
            <Warp >
                <img src={fighting} alt='' />
            </Warp>
            <Warp >
                <img src={robo_in_space} alt='' />
            </Warp>
            <Warp>
                <img src={dragonRobo} alt='' />
            </Warp>
             <Warp>
                <img src={space_flower  } alt='' />
            </Warp> 
            <Warp>
                <img src= {spaceship} alt='' />
            </Warp> 
            <Warp>
                <img src= {ai_girl} alt='' />
            </Warp> 
        </Carousel>
    )
}

export default ImgSlider


const Carousel = styled(Slider)`
    cursor: pointer;
    margin-bottom: 10px;


    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(158, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }
    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
`

const Warp = styled.div`
    img{
        border: 4px solid transparent;
        border-radius: 5px;
        
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 650px;
        box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`