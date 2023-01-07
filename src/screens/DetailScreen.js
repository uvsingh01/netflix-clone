import React, {useEffect, useState}from 'react'
import styled from 'styled-components';
import db from './../firebase';
import GifScreen from './GifScreen';
import Nav from './../components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function DetailScreen() {

const [movies,setmovies]=useState([])
  const fetchmovies=async()=>{
    const response=db.collection('movies');
    const data=await response.get();
    data.docs.forEach(item=>{
     setmovies([item.data()] )
    })
  }
  const [change, setChange] = useState(true);
  useEffect(() => {
    let num = 5;
    fetchmovies();
    let timer = setInterval(() => {
      num -= 1;
      if (num === 0) {
        setChange(false);
        clearInterval(timer);
        console.log(movies);
      }
    }, 1000);
  }, []);
  return <>{change?<GifScreen/>:
  
  <DetailsContainer image={movies[0].backdrop_path}>
    <Nav/>
    <DetailsDesciption>
    <h1>{movies[0].name||movies[0].title|| movies[0].original_title}</h1>
    <div>{movies[0].overview}</div>
    <div>IMDB rating :{movies[0].vote_average} <FontAwesomeIcon icon={faStar} /></div>
    <div>Votes: {movies[0].vote_count}</div>

    </DetailsDesciption>
  </DetailsContainer>
  
  }</>;
}

export default DetailScreen;

const DetailsContainer= styled.div`
${({ image }) =>
    image
      ? `background-image: url("https://image.tmdb.org/t/p/original/${image}");`
      : ` background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png");`}
      height:100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display:flex;
`;


const DetailsDesciption = styled.div`
position: absolute;
color:white;
bottom:0;
max-width: 400px;
margin-left: 20px;
margin-right: 20px;
>h1{
  border-bottom: solid 1px white;
  margin-bottom:20px;
}

>div{
  margin-bottom: 20px;
}
`;