import React from 'react';
import styled from "styled-components";
import {auth, provider} from "../firebase";
import {setUserLogin} from "../features/user/userSlice";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";

const Login = () => {

    const dispatch = useDispatch();

    const history = useHistory();

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
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />

                <SignUp onClick={signIn}>
                    GET ALL THERE 🚀
                </SignUp>

                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iure odit omnis sunt. Accusantium at distinctio ipsum nesciunt numquam, omnis qui rem sunt suscipit veniam! Nemo perspiciatis quae voluptatem.
                </Description>

                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    );
};

export default Login;


const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background: url("/images/login-background.jpg") no-repeat fixed top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`

const CTALogoOne = styled.img`
  
`

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  
  &:hover {
    background-color: #0483ee;
    transition: all 0.25s;
  }

`

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`

const CTALogoTwo = styled.img`
  margin-top: 15px;
  width: 90%;
`