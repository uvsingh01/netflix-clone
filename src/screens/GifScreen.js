import React from 'react'
import styled from 'styled-components';

function GifScreen() {
  return (
    <GifContainer>
        <GifImage src={"./gif.gif"}></GifImage>
    </GifContainer>
  )
}

export default GifScreen;
const GifContainer = styled.div`
height:100vh;
background-color: #141414;
display:flex;
align-items: center;
justify-content: center;
`;

const GifImage = styled.img`
width: 35%;
`;