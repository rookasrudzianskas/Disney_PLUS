import React from 'react';
import styled from "styled-components";
import {PlusOneOutlined} from "@material-ui/icons";

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
                    <img src="/images/play-icon-black.png" alt=""/>
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt=""/>
                    <span>TRAILER</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt=""/>
                </GroupWatchButton>

            </Controls>

            <SubTitle>
                    2020 👉 7m 👉 Family, Fantasy, Kids, Animation
            </SubTitle>

            <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eos libero maiores natus nemo nesciunt placeat porro praesentium provident recusandae, unde voluptas, voluptatum? Aut dicta doloribus ducimus eum expedita explicabo maiores molestiae repellendus, sint voluptatum. A ab accusantium atque commodi dignissimos dolor eos, eveniet, ex facilis incidunt itaque libero nemo nisi odit quibusdam quis repellendus similique suscipit ut veniam voluptas.
            </Description>

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
  display: flex;
  align-items: center;
  
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  
  &:hover {
    background-color: rgb(198, 198, 198);
    transition: all 250ms;
  }
  
  span {
    color: black;
  }
`

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
    
    span {
      color: rgb(249, 249, 249);
    }
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0 ,0.6);
  margin-right: 16px;
  
  
  span {
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`