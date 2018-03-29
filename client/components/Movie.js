import React, {Component} from 'react';
import {connect} from 'react-redux';
import api from '../api';

const Movie = ({ onDeleteMovie, title, id, text, img}) => {

    const deleteMovie = () => {
        api.deleteMovie(id)
            .then(onDeleteMovie(id));
    };

    return (
        <div>
            <img src={img} alt="" width="200"/>
            <h1>{title}</h1>
            <p>{text}</p>
            <p>{id}</p>
            <button onClick={deleteMovie}>delete</button>
            <hr/>
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