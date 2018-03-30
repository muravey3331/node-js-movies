import React, {Component} from 'react';
import {connect} from 'react-redux';
import Movie from "./Movie";

const MoviesList = ({moviesList}) => {
    return (
        <div>
            <ul className="movie-list">
                { moviesList.map((movie, index) => {
                    return (
                        <li key={index}
                            className="movie-card">
                            <Movie title={movie.title}
                                   id={movie._id}
                                   text={movie.text}
                                   img={movie.img}
                                   actors={movie.actors}
                                 />
                        </li>
                    );
                    })
                }
            </ul>
        </div>
    )
};



function mapStateToProps(state) {
    return {
        moviesList: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)