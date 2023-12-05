import React, { useState } from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import Card from "../components/Card";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Netflix = () => {
  const [isScroll, setIsScroll] = useState(false);
  const navigate=useNavigate();

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };
  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScroll={isScroll} />
        <img className="backgroung-img"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          alt=""
          style={{ width: "100%" }}
        />
        <div className="container">
          <div className="title">
            <h1>Avengers: Age of Ultron</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum exercitationem natus esse quaerat laboriosam
              voluptatem, tempora earum aperiam qui possimus. Cupiditate est,
              veniam animi ea tenetur temporibus fugiat adipisci soluta!
            </p>
          </div>
          <div className="buttons">
            <button className="playBtn"onClick={()=>navigate('/player')}>Play</button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
      <Card/>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
background-color: black;
  .hero {
    position: relative;
    .backgroung-img{
      filter: brightness(40%);
    }
  }
  .container {
    position: absolute;
    bottom: 1rem;
    .title {
      h1 {
        font-size: 73px;
        text-decoration: uppercase;
        margin-left: 5rem;
        background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        margin-bottom: -50px;
        margin-left: 5rem;
        width: 640px;
        font-family: "lexend Deca ", sans-serif;
        color: #fff;
      }
    }
    .buttons{
      display: flex;
      margin:5rem;
      gap: 2rem;
    }

    .playBtn {
      cursor: pointer;
      color: red;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1.4rem;
    }
    .moreBtn{
      cursor: pointer;
      color: white;
      background-color: black;
      padding: 0.6rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: 0.1rem solid white;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1.4rem;
    }
  }
`;

export default Netflix;
