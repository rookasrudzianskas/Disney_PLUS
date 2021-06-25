import React from 'react';
import styled from "styled-components";

const Movies = () => {
    return (
        <Container>
            <h4>Recommended For You</h4>

            <Content>
                <Wrap>
                    <img src="https://assets.foxdcg.com/dpp-uploaded/images/the-simpsons/keyart_s33.jpg" alt=""/>
                </Wrap>

                <Wrap>
                    <img src="https://assets.foxdcg.com/dpp-uploaded/images/the-simpsons/keyart_s33.jpg" alt=""/>
                </Wrap>

                <Wrap>
                    <img src="https://assets.foxdcg.com/dpp-uploaded/images/the-simpsons/keyart_s33.jpg" alt=""/>
                </Wrap>

                <Wrap>
                    <img src="https://assets.foxdcg.com/dpp-uploaded/images/the-simpsons/keyart_s33.jpg" alt=""/>
                </Wrap>

            </Content>
        </Container>
    );
};

export default Movies;


const Container = styled.div`
  
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
`