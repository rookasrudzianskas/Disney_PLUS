import React from 'react';
import styled from "styled-components";

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F03%2Fbao-rgb-s110_19e-pub16-215-2000.jpg&q=85" alt=""/>
            </Background>
            
            <ImageTitle>
                <img src="https://upload.wikimedia.org/wikipedia/fr/1/1a/Bao_logo.png" alt=""/>
            </ImageTitle>

            <Controls>

                <PlayButton>

                </PlayButton>

                <TrailerButton>

                </TrailerButton>

                <AddButton>

                </AddButton>

                <GroupWatchButton>

                </GroupWatchButton>

            </Controls>
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
  opacity: 0.8;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  
`

const PlayButton = styled.div`
  
`

const TrailerButton = styled.div`
  
`

const AddButton = styled.div`
  
`

const GroupWatchButton = styled.div`
  
`