import React, {useEffect, useState} from 'react';
import {} from '../styles';
import {useHistory} from "react-router-dom";
import {MovieState} from "../movieState";

const MovieDetail = () => {

    const history = useHistory();
    const url = useHistory.location.pathname;
    const [movies , setMovies ]  = useState(MovieState);
    const [movie , setMovie] = useState(null);

    // USE_EFFECT
useEffect(()=>{
    const currentMovie = movies.filter((stateMovie)=>stateMovie.url === url);
    setMovie(currentMovie);
},[movies,url])

    return (
        <div>
            <h1>MovieDetail</h1>
        </div>
    )
}

export default MovieDetail;