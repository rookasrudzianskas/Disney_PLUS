import React from 'react';
import styled from "styled-components";
import {selectMovies} from "../features/movie/movieSlice";
import {useSelector} from "react-redux";

const Movies = () => {

    const movies = useSelector(selectMovies);

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
  margin-top: 25px;
`

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms;
  cursor: pointer;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 72%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`