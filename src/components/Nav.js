import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Nav = () => {

  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar=()=>{
    if(window.scrollY>100){
      setshow(true);
    }else{
      setshow(false);
    }
  }
   
  useEffect(()=>{
    window.addEventListener('scroll',transitionNavBar);
    return ()=> window.removeEventListener('scroll',transitionNavBar);
  },[]);

  return (
    <NavContainer active={show} >
      <NavInnerContainer>
        <img height="" width={"120px"} src="./icon.png" alt="netflix" onClick={()=>navigate("/")} />
        <img height="" width="40px"  src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='profile' onClick={()=>navigate("/profile")} />
      </NavInnerContainer>
    </NavContainer>
  )
}

export default Nav;

const NavContainer=styled.div`
  position: fixed;
  top:0;
  /* padding:0 20px 20px 20px; */
  width:100%;
  height:65px;
  z-index:1;
  ${({active})=> active ? `background-color: black; ` : `background-color: none;` }
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const NavInnerContainer=styled.div`
  display:flex;
  justify-content:space-between;
  >img:first-child{
    position:fixed;
    top:5px;
    left:0;
    object-fit: contain;
    padding-left: 20px;
    cursor:pointer;
  }
  >img:last-child{
    cursor: pointer;
    position: fixed;
    right:20px;
    width: 30px;
    margin-top: 15px;
  }
`;