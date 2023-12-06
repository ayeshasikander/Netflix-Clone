import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
const Card = ({ movieData }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <CardContaniner
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
        onClick={() => navigate("/player")}
      />

      {hovered && (
        <div className="hover">
          <div className="wrapper-vi">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
              onClick={() => navigate("/player")}
            />
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
              autoPlay
              loop
              controls
              muted
            ></video>
          </div>
          <div className="info-section">
            <h2 className="movieName" onClick={() => navigate("/player")}>
              {movieData.name}
            </h2>

            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  className="icon"
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill className="icon" title="like" />
                <RiThumbDownFill className="icon" title="dislike" />
                <BsCheck className="icon" title="Remove from list" />
                <AiOutlinePlus className="icon" title="Add to my list" />
              </div>

              <div className="info">
                <BiChevronDown className="icon" title="more info" />
              </div>
            </div>
            <div className="genre">
              <ul>
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </CardContaniner>
  );
};

const CardContaniner = styled.div`
  margin-top: 1rem;
  max-width: 230px;
  width: 230px;
  height: 100%;
  background-color: red;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    height: 100%;
    width: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -28vh;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .wrapper-vi {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        z-index: 4;
        position: absolute;
        top: 0;
      }
      video {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        z-index: 5;
        position: absolute;
        top: 0;
      }
    }
    .info-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
      .movieName {
        color: white;
        font-size: 1.8rem;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .icons {
      display: flex;
      justify-content: space-between;
      .controls {
        display: flex;
        gap: 0.5rem;
      }

      svg {
        cursor: pointer;
        color: #ffff;
        border: 0.1rem solid white;
        border-radius: 50%;
        font-size: 1.5rem;
        transition: 0.3s ease-in-out;
        padding: 0.2rem;

        &:hover {
          color: #000;
          background-color: #fff;
        }
      }
    }
    .genre {
      color: white;
      display: flex;
      ul {
        gap: 1rem;
        display: flex;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;
export default Card;
