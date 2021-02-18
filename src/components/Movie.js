import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link to={{pathname: '/movie-detail', 
            state: {year, title, summary, poster, genres},}}>
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">
                        {title}
                    </h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genre">
                        {genres.map((genre, index) => { //index를 빼면 key porp 에러 메시지 발생
                            return <li key={index} className="movie_genre">{genres}</li>;
                        })}
                    </ul>
                    {/* 시놉시스 180자까지만 자르기 */}
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
};

export default Movie;