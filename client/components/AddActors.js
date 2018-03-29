import React, {Component} from 'react';
import {connect} from 'react-redux';
import api from '../api';

const AddActors = ({ actors }) => {

    return (
        <div>
            <input type="text" placeholder="Add actor..."/>
            <ul>
                {actors.map((actor, index) => (
                    <li key={index}>
                        {actor}
                        <button>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        actors: state.createMovie.actors
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onAddMovie: (data) => {
            dispatch({type: "ADD_MOVIE", data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddActors)