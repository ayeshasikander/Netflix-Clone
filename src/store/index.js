import {
    configureStore,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import { MY_API_KEY, TMDB_BASE_URL } from "../utils/constant";
import axios from "axios";

const initialState = {
    movies: [],
    generesLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
    const {
        data: { genres },
    } = await axios.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
    );

    return genres;
});

const arrayOfMovieData = (array, movieArray, genres) => {
    array.forEach((movie) => {
        const movieGenres = [];
        movie.genre_ids.forEach((genre) => {
            const name = genres.find(({ id }) => id === genre);
            if (name) movieGenres.push(name.name);
        });
        if (movie.backdrop_path)
            movieArray.push({
                id: movie.id,
                name: movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres: movieGenres.slice(0, 3),
            });
    });
};


const getMovieData = async (api, genres, paging = false) => {
    const movieArray = []
    for (let i = 1; movieArray.length < 80 && i < 10; i++) {
       const {data: {results},}= await axios.get(`${api}${paging ? `&page=${i}` : ""}`)
        arrayOfMovieData(results, movieArray, genres);
    };
    return movieArray;
}

export const fetchMovies = createAsyncThunk(
    "netflix/trending",
    async ({ type }, thunkAPI) => {
        const {
            netflix: { genres },
        } = thunkAPI.getState();
        return getMovieData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`, genres, true);
        // console.log(data); 

    }
);


const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.generesLoaded = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            
        });
    },
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    },
});
