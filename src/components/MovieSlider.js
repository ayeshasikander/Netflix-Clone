import React, { useState, useRef } from "react";
import Card from "./Card";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MovieSlider = ({ data, title }) => {

  const listRef = useRef();

  const [visible, setVisible] = useState(false);
  const [slide, setSlide] = useState(0);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === 'left' && slide > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSlide(slide - 1);
    }
    if (direction === 'right' && slide < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlide(slide + 1);
    }
  }

  return (
    <Container
      visible={visible}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div className={`slider-action left ${!visible ? "none" : ""}`}>
          <AiOutlineLeft onClick={() => handleDirection('left')} />
        </div>
        <div className="slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div className={`slider-action right ${!visible ? "none" : ""}`}>
          <AiOutlineRight onClick={() => handleDirection('right')} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  gap: 0.7rem;
  position: relative;
  padding: 1rem 0;

  h1 {
    margin-left: 10px;
    color: white;
    font-size: 25px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .wrapper {
    .slider {
      display: flex;
      gap: 0.7rem;
      width: max-content;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 5px;
    }
    .slider-action {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      height: 100%;
      width: 50px;
      z-index: 99;
      top: 2rem;
      bottom: 0;
      transition: 0.1s ease-in-out;
      svg {
        font-size: 2rem;
        color: white;
        cursor: pointer;
        border: 0.1rem solid red;
        padding: 0.1rem;
        border-radius: 50%;
        background-color: #0303136d;
      }
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
    .none{
      display: none;
    }
  }
`;

export default MovieSlider;
