import React from 'react';
import {connect} from 'react-redux';
import api from '../api';
import { Link } from 'react-router-3';

//actions
import { deleteMovie } from '../actions';

const Movie = ({ onDeleteMovie, title, id, image, rate,  year, format }) => {

    async function deleteMovie () {
        let response = await api.deleteMovie(id);
        if (response.status === 200) {
            onDeleteMovie(id)
        }else{
            throw new Error (response.status);
        }
    }

    return (
        <div className="movie">
            <Link to={ `/movie/${id}` } >
                <div style={{ backgroundImage: `url(${ image || "http://marcroftmedical.com/wp-content/themes/marcroft/images/default-blog.jpg" })`}}
                     className="movie-card-img"/>
            </Link>
            <div className="movie-snippet">
                <h2 className="movie-card__title">{title}</h2>
                <div>
                    <p className="movie-card__value">{year}</p>
                </div>
                <button className="button--delete" onClick={deleteMovie}/>
            </div>
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
        onDeleteMovie: id => dispatch(deleteMovie(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)