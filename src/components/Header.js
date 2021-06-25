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

                <UserImage src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" />

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
  margin-left: 25px;
  flex: 1;
  align-items: center;
  
  a {
    display: flex;
    align-items: center;
    padding:  0 20px;
    cursor: pointer;
    
    img {
      height: 20px;
    }
    
    span {
      font-size: 13px;
      letter-spacing: 1.2px;
      position: relative;
      
      
      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
      }
    }
  }
`

const UserImage = styled.img`
  display: flex;
  width:  48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 730px;
`