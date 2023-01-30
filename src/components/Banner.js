import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import axios from "../axios";
import requests from "../Request";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(request.data.results);
      console.log(movies);
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
    >
      {movies.map((movie) => (
        <CarousalContainer>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          ></img>
          <BannerContainer>
            <BannerTitle>{movie.name}</BannerTitle>
            <BannerButtons>
              <ButtonPlay>play</ButtonPlay>
              <ButtonTitle>My List</ButtonTitle>
            </BannerButtons>
            <BannerDescription>
              {truncate(movie.overview, 150)}
            </BannerDescription>
          </BannerContainer>
        </CarousalContainer>
      ))}
    </Carousel>
  );
};

export default Banner;

const CarousalContainer = styled.div`
  text-align: left;
  max-height: 600px;
  color: white;
  > img {
    object-fit: contain;
  }
`;

const BannerContainer = styled.div`
  position: absolute;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  height: 70%;
  justify-content: end;
  top: 0;
  margin-left: 30px;
  max-width: 50%;
`;

const BannerTitle = styled.h1`
  font-size: 4vw;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerButtons = styled.div``;

const ButtonPlay = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-size: 1vw;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2vw;
  padding-right: 2vw;
  margin-right:1vw;
  padding-top: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding-bottom: 0.5rem;

  :hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const ButtonTitle = styled(ButtonPlay)``;

const BannerDescription = styled.h1`
  width: auto;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1.8vw;
  height: 80px;
`;
