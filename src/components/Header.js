import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <Nav>
            <Logo />
        </Nav>
    );
};

export default Header;

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
`

const Logo = styled.img`
  
`
