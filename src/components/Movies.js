import React from 'react';
import styled from "styled-components";

const Movies = () => {
    return (
        <Container>
            <h4>Recommended For You</h4>

            <Content>
                <Wrap>
                    <img src="https://www.charlotteruff.com/wp-content/uploads/2020/04/disney-classics-1-1600x800.jpg" alt=""/>
                </Wrap>
            </Content>
        </Container>
    );
};

export default Movies;


const Container = styled.div`
  
`

const Content = styled.div`
  
`

const Wrap = styled.div`
  
`