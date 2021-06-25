import React, {useEffect} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUserEmail, selectUserName, selectUserPhoto, setSignOut, setUserLogin} from "../features/user/userSlice";
import {auth, provider} from "../firebase";
import {useHistory} from "react-router";


const Header = () => {
    const history = useHistory();

    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            // remembers in cooky, so if user, user
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                history.push("/");
            }
        })
    }, []);

    const signIn = () => {
        // logins

        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;

            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }))

            history.push('/');


        })
    }

    const signOut = () => {
        auth.signOut().then(result => {
            dispatch(setSignOut());
            history.push("/login")
        })
    }

    return (
        <Nav>
            <Link to="/">
            <Logo src="/images/logo.svg" />
            </Link>
                {
                    !userName ? (
                        <LoginContainer>
                            <Login onClick={signIn}>
                                LOGIN
                            </Login>
                        </LoginContainer>
                    ) :
                        <>
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

                            <UserImage src={userPhoto} onClick={signOut} />

                        </NavMenu>
                    </>
                    }

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
  padding:  0 36px;
  overflow-x: hidden;
  
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
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }
    
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
        transition: 0.2s;
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
  margin-left: 650px;
`

const Login = styled.button`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
    transition: all 250ms;
  }
`

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`