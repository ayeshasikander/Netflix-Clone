import React from 'react';
import styled from 'styled-components';
import MovieSlider from './MovieSlider';


const Slider = ({ movies }) => {

    const getMoviesBetween = (start, end) => {
        return movies.slice(start, end)
    }

    return (
        <Sliderwrapper>
            <MovieSlider data={getMoviesBetween(0,10)} title="Only on Netflix"/>
            <MovieSlider data={getMoviesBetween(10,20)} title="Trending Now"/>
            <MovieSlider data={getMoviesBetween(20,30)} title="Action Movies"/>
            <MovieSlider data={getMoviesBetween(30,40)} title="Romantic Movies"/>
            <MovieSlider data={getMoviesBetween(40,50)} title="Horror Movies"/>
            <MovieSlider data={getMoviesBetween(50,60)} title="Science Fiction"/>
            <MovieSlider data={getMoviesBetween(60,70)} title="New Release"/>
            <MovieSlider data={getMoviesBetween(70,80)} title="Popular on Netflix"/>
        </Sliderwrapper>
    )
}

const Sliderwrapper = styled.div`
`

export default Slider;
