import React from 'react';
import styled from "styled-components";

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F03%2Fbao-rgb-s110_19e-pub16-215-2000.jpg&q=85" alt=""/>
            </Background>
        </Container>
    );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`