import React, {useEffect, useState}from 'react'
import styled from 'styled-components';
import db from './../firebase';
import GifScreen from './GifScreen';
import Nav from './../components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import axios from '../axios';
import { API_KEY } from '../Request';

function DetailScreen() {
const url  = "https://www.youtube.com/watch?v="
const [movies,setmovies]=useState([]);
const [trailer, setTrailer] = useState("");
const [change, setChange] = useState(true);

const fetchmovies=async()=>{
  const response= db.collection('movies');
  const data=await response.get();
  console.log(data);
  data.docs.forEach(item=>{
    console.log(item.data());
   setmovies([item.data()] );
  })
  return data;
}


const fetchTrailer= async()=>{
  let genre = "movie";
  if(movies[0].genrename==="NETFLIX ORIGINALS"){
    genre="tv";
  }
  const baseUrl =`${genre}/${movies[0].id}/videos?api_key=${API_KEY}`;
  const response = await axios.get(baseUrl);
  // setTrailer(response.data.results)  
  response.data.results.forEach((item)=>{
    if(item.name==="Official Teaser" || item.name==="Official Trailer" || item.type==="Trailer"){
      console.log(item.key);
    setTrailer(item.key)
  }} );
  console.log(trailer);
  return response;
}
  useEffect(()=>{
    fetchTrailer();
  },[movies])

  useEffect(() => {
    let num =3;
    fetchmovies();
    let timer = setInterval(() => {
      num -= 1;
      if (num === 0) {
        setChange(false);
        clearInterval(timer);      
      }
    }, 1000);
  }, []);
  return <>{change?<GifScreen/>:
  
  <DetailsContainer image={movies[0].backdrop_path}>
  <Nav/>
    <DetailsDesciption>
      <ReactPlayer height={"300px"} width={"100%"} url={`${url}${trailer?trailer:"sDL70A0I3kA"}`} controls={"true"} ></ReactPlayer>
      <h1>{movies[0].name||movies[0].title|| movies[0].original_title}</h1>
      <div>{movies[0].overview}</div>
      <div>IMDB rating :{Math.trunc(movies[0].vote_average)} <FontAwesomeIcon icon={faStar} style={{color:"yellow"}} /></div>
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
    flex-direction:column;
    overflow:hidden;
`;


const DetailsDesciption = styled.div`
color:white;
bottom:0;
max-width: 600px;
margin: 80px 20px 0px 20px;
>h1{
  border-bottom: solid 1px white;
  margin-bottom:20px;
  font-size: 30px;
}

>div{
  font-size: 15px;
  margin-bottom: 20px;
}
`;