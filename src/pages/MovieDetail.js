import React, {useEffect, useState} from 'react';
import {Awards, AwardStyle, Details, HeadLine} from '../styles';
import {useHistory} from "react-router-dom";
import {MovieState} from "../movieState";
// import {motion} from "framer-motion";
import {PageAnimation} from "../animation";

const MovieDetail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // USE_EFFECT
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url])

    return (
        <>
            {movie && (
                <Details variants={PageAnimation} initial="hidden" animate="show"  exit="exit">
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie"/>
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                id={award.title}
                            />
                        ))}
                    </Awards>
                    <imageDisplay>
                        <img src={movie.secondaryImg} alt="secondary"/>
                    </imageDisplay>
                </Details>
            )}
        </>
    )
}


const Award = ({title , description}) => {
    return (<AwardStyle>
            <h3>{title}</h3>
            <div className='line'></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail;