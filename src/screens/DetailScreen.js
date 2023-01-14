import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "./../firebase";
import GifScreen from "./GifScreen";
import Nav from "./../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import axios from "../axios";
import { API_KEY } from "../Request";
import { useDocument } from "react-firebase-hooks/firestore";

function DetailScreen() {
  const url = "https://www.youtube.com/watch?v=";
  const [trailer, setTrailer] = useState("");
  const [change, setChange] = useState(true);
  const [details] = useDocument(db.collection("movies").doc("details"));

  const fetchTrailer = async () => {
    let genre = "movie";
    if (details.data().genrename === "NETFLIX ORIGINALS") {
      genre = "tv";
    }
    const baseUrl = `${genre}/${details.data().id}/videos?api_key=${API_KEY}`;
    const response = await axios.get(baseUrl);
    response.data.results.forEach((item) => {
      if (
        item.name === "Official Teaser" ||
        item.name === "Official Trailer" ||
        item.type === "Trailer"
      ) {
        setTrailer(item.key);
      }
    });
    return response;
  };
  useEffect(() => {
    fetchTrailer();
  }, [details]);

  useEffect(() => {
    let num = 3;
    let timer = setInterval(() => {
      num -= 1;
      if (num === 0) {
        setChange(false);
        clearInterval(timer);
      }
    }, 1000);
  }, []);

  
  return (
    <>
      {change ? (
        <GifScreen />
      ) : (
        <DetailsContainer image={details.data().backdrop_path}>
          <Nav />
          <DetailsDesciption>
            <ReactPlayer
              height={"300px"}
              width={"100%"}
              url={`${url}${trailer ? trailer : "sDL70A0I3kA"}`}
              controls={"true"}
            ></ReactPlayer>
            <h1>
              {details.data().name ||
                details.data().title ||
                details.data().original_title}
            </h1>
            <div>{details.data().overview}</div>
            <div>
              IMDB rating :{Math.trunc(details.data().vote_average)}{" "}
              <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
            </div>
            <div>Votes: {details.data().vote_count}</div>
          </DetailsDesciption>
        </DetailsContainer>
      )}
    </>
  );
}

export default DetailScreen;

const DetailsContainer = styled.div`
  ${({ image }) =>
    image
      ? `background-image: url("https://image.tmdb.org/t/p/original/${image}");`
      : ` background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png");`}
  height:100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const DetailsDesciption = styled.div`
  color: white;
  bottom: 0;
  max-width: 600px;
  margin: 80px 20px 0px 20px;
  > h1 {
    border-bottom: solid 1px white;
    margin-bottom: 20px;
    font-size: 30px;
  }

  > div {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;
