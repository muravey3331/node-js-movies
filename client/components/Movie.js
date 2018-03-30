import React, {Component} from 'react';
import {connect} from 'react-redux';
import api from '../api';

const Movie = ({ onDeleteMovie, title, id, text, img ,actors}) => {

    const deleteMovie = () => {
        api.deleteMovie(id)
            .then(onDeleteMovie(id));
    };

    return (
        <div>
            <img src={img} alt="" className="movie-img" />
            <h1>{title}</h1>
            <p>{text}</p>
            <h4>Actors:</h4>
            { <ul className="actors-list">
                {actors.map((actor, index) => (<li key={index} className="actor-item">{actor.name}</li>))}
            </ul>}
            <button onClick={deleteMovie}>delete</button>
        </div>
    )
};



function mapStateToProps(state) {
    return {
        movie: state
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onDeleteMovie: (id) => {
            dispatch({type: "DELETE_MOVIE", id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)