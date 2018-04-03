import React, {Component} from 'react';
import {connect} from 'react-redux';
import api from '../api';

const Movie = ({ onDeleteMovie, title, id, text, image ,actors, rate }) => {

    const deleteMovie = () => {
        api.deleteMovie(id)
            .then(onDeleteMovie(id));
    };

    return (
        <div>
            <div style={{ backgroundImage: `url(${image || "http://marcroftmedical.com/wp-content/themes/marcroft/images/default-blog.jpg"})`}} className="movie-img"/>
            <h2>{title}</h2>
            <h4>Rate: {rate}</h4>
            <h4>Actors:</h4>
            { <ul className="actors-list">
                {actors.map((name, index) =>  {
                    if (index < 2) return (<li key={index} className="actor-item">{name},</li>);
                    if (index === 2 ) return (<li key={index} className="actor-item">{name} ...</li>)}
                        )}
            </ul>}
            {/*<h3>Description:</h3>*/}
            {/*<p>{text}</p>*/}
            <button className="button button--error" onClick={deleteMovie}>delete movie</button>
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