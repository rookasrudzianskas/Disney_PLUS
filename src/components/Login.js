import React from 'react';
import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
            </CTA>
        </Container>
    );
};

export default Login;


const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);

  &:before {
    background: url("/images/login-background.jpg") no-repeat fixed top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
`

const CTALogoOne = styled.img`
  
`