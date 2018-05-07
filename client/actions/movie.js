import {apiPrefix} from '../../etc/config.json';
import api from '../api';

import {toggleCreatePopup, clearCreateForm} from './createForm'

export const ADD_MOVIE        = "ADD_MOVIE";
export const DELETE_MOVIE     = "DELETE_MOVIE";
export const OPEN_MOVIE_ABOUT = "OPEN_MOVIE_ABOUT";


export const addMovie = data => ({
    type: ADD_MOVIE,
    data
});

export const removeMovie = id => ({
    type: DELETE_MOVIE,
    id
});

export const openMovieAbout = data => ({
    type: OPEN_MOVIE_ABOUT,
    data
});

export const addNewMovie = (movie) => {
    return async dispatch => {
        try {
            let response = await api.addMovie(movie);
            if (response.status === 200) {
                dispatch(addMovie(response.data));
                dispatch(toggleCreatePopup());
                dispatch(clearCreateForm());
            }
        } catch (err) {
            throw new Error(err);
        }
    }
};

export const deleteMovie = (id) => {
    return async dispatch => {
        try {
            let response = await api.deleteMovie(id);
            if (response.status === 200) {
                dispatch(removeMovie(id))
            }
        } catch (err) {
            throw new Error(err);
        }
    }
};

export const openMovie = (id) => {
    return async dispatch => {
        try {
            let response = await api.getMovie(id);
            if (response.status === 200) {
                dispatch(openMovieAbout(response.data));
            }
        } catch (err) {
            throw new Error(err);
        }

    }
};