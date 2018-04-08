import React from 'react';
import {connect} from 'react-redux';

//components
import Movie from "./Movie";
import Filter from "./Filter";
import CreateMovie from "./CreateMovie";
import Header from './Header';

const MoviesList = ({moviesList}) => {
    return (
        <div>
            <Header />
            <Filter/>
            <CreateMovie />

            <ul className="movie-list">
                { moviesList.map((movie, index) => {
                    return (
                        <li key={index}
                            className="movie-card">
                                <Movie title={movie.title}
                                       id={movie._id}
                                       text={movie.text}
                                       image={movie.image}
                                       actors={movie.actors}
                                       rate={movie.rate}
                                       format={movie.format}
                                       year={movie.year}
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