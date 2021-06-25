import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImgSlider = () => {

    // settings for the slider
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }


    return (
        // this puts all the settings, straight to the carousel component
        <Carousel {...settings}>
            
        </Carousel>
    );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  
`