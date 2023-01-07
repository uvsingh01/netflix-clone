import React, { useState } from "react";
import styled from "styled-components";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signin, setSignin] = useState(false);

  return (
    <LoginContainer>
      <LoginBackground>
        <LoginLogo
          src={
            "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          }
        ></LoginLogo>
        <SignIn onClick={()=>setSignin(true)}>Sign In</SignIn>
        <LoginGradient></LoginGradient>
      </LoginBackground>

      <LoginBody>
        {signin ? (
          <SignUpScreen></SignUpScreen>
        ) : (
          <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <LoginInputContainer>
              <form>
                <LoginInput
                  type={"email"}
                  placeholder={"Email Address"}
                ></LoginInput>
                <LoginButton onClick={()=>setSignin(true)}>GET STARTED</LoginButton>
              </form>
            </LoginInputContainer>
          </>
        )}
      </LoginBody>
    </LoginContainer>
  );
}

export default LoginScreen;

const LoginContainer = styled.div`
  position: relative;
  height: 100%;
  background: url("https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"),
    center no-repeat;
  background-size: cover;
`;

const LoginBackground = styled.div``;

const LoginLogo = styled.img`
  position: fixed;
  left: 0;
  width: 150px;
  object-fit: contain;
  padding-left: 20px;
`;

const SignIn = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  padding: 10px 20px;
  font-size: 1 rem;
  color: #fff;
  background-color: #e50914;
  font-weight: 600;
  border: none;
  cursor: pointer;

`;

const LoginGradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const LoginBody = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1;
  color: #fff;
  padding: 20px;

  > h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }

  > h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }

  > h3 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

const LoginInputContainer = styled.div``;
const LoginInput = styled.input`
  padding: 10px;
  outline-width: 0;
  height: 30px;
  width: 30%;
  border: none;
  max-width: 600px;
`;
const LoginButton = styled.button`
  padding: 16px 20px;
  font-size: 1rem;
  background-color: #e50914;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
`;
