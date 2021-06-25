import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="">
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>

                <a href="">
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>

                <a href="">
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>

                <a href="">
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>

                <a href="">
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>

                <a href="">
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>

            </NavMenu>
        </Nav>
    );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding:  0 36px;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  
  a {
    display: flex;
    align-items: center;
    padding:  0 20px;
    
    img {
      height: 20px;
    }
    
    span {
      font-size: 13px;
      letter-spacing: 1.2px;
    }
  }
`