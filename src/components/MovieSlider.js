import React from "react";
import Card from "./Card";
import styled from "styled-components";

const MovieSlider = ({ data, title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div className="wrapper">
        <div className="slider">
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
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
    
  }
`;

export default MovieSlider;
