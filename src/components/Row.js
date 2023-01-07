import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "../axios";
import { sendData } from "../features/dataSlice";
import { useNavigate } from 'react-router-dom';
import db from './../firebase';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  const dispatch = useDispatch();

  const navigate = useNavigate();
  function data(movie){
        db.collection("movies").doc("details").set(movie);
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  const doThese=(movie)=>{
    data(movie);
    dispatch(sendData({movie}))
    navigate("/details")
  }

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <RowImgContainer>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <RowImg active={isLargeRow}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ?  movie.poster_path : movie.backdrop_path 
                }`}
                alt={movie.name}
                onClick={()=>doThese(movie)}
              />
            ))
        }
      </RowImgContainer>
    </RowContainer>
  );
}

export default Row;

const RowContainer = styled.div`
  color: white;
  padding-left: 20px;
  background-color: black;
  cursor: pointer;
`;
const RowTitle = styled.h1``;
const RowImg = styled.img`
  ${({active})=> active ? `max-height: 250px; ` : `max-height: 100px;` }
  margin-right: 10px;
  width:100%;
  transition: transform 450ms;
  :hover{
    transform: scale(1.08);
    opacity:1;
  }
`;
const RowImgContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
