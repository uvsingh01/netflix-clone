import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "./../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <ProfileContainer>
      <Nav></Nav>
      <ProfileBody>
        <h1>Edit Profile</h1>
        <ProfileInfo>
          <img
            height="20%"
            width="20%"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile"
          />
          <ProfileDetails>
            <h2>{user.email}</h2>
            <ProfilePlans>
              <h3>Plans</h3>
              <button onClick={() => auth.signOut()}>Sign out</button>
            </ProfilePlans>
          </ProfileDetails>
        </ProfileInfo>
      </ProfileBody>
    </ProfileContainer>
  );
}

export default ProfileScreen;

const ProfileContainer = styled.div`
  height: 100vh;
  color: white;
  background-color: black;
  padding-top: 40px;
`;

const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8%;
  max-width: 600px;

  > h1 {
    font-size: 5vw;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }
`;
const ProfileInfo = styled.div`
  display: flex;
`;
const ProfileDetails = styled.div`
  color: white;
  margin-left: 25px;
  flex: 1;

  > h2 {
    background-color: gray;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
    margin-bottom: 10px;
  }
`;
const ProfilePlans = styled.div`
  > button {
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 5%;
    width: 100%;
    color: #fff;
    background-color: #e50914;
    cursor: pointer;
  }

  >h3{
    border-radius: 1px solid #282c2d;
    padding-bottom: 10px;
  }
`;
