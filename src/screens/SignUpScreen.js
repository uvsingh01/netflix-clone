import React ,{useRef}from "react";
import styled from "styled-components";
import { auth } from "../firebase";
// import { useNavigate } from 'react-router-dom';

function SignUpScreen() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    )
    .then((authUser)=>{console.log(authUser);})
    .catch((error)=>{alert(error.message)});
  };
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    )
    .then((authUser)=>{console.log(authUser,123);})
    .catch((error)=>{alert(error.message)});
  };
  return (
    <SignUpScreenContainer>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn} >
          Sign In
        </button>

        <h4>
          <span>New to Netflix?</span>
          <span onClick={register}>Sign Up now</span>
        </h4>
      </form>
    </SignUpScreenContainer>
  );
}

export default SignUpScreen;

const SignUpScreenContainer = styled.div`
  max-width: 300px;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 0, 0, 0.85);

  > form {
    display: flex;
    flex-direction: column;
  }

  > form > input {
    outline-width: 0;
    height: 40px;
    margin-bottom: 14px;
    border-radius: 5px;
    border: none;
    padding: 5px 15px;
  }

  > form > button {
    padding: 16px 20px;
    font-size: 1rem;
    color: #fff;
    border-radius: 5px;
    background-color: #e50914;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  > form > h1 {
    text-align: left;
    margin-bottom: 25px;
  }

  > form > h4 > span:first-child {
    color: gray;
  }

  > form > h4 > span:last-child:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
