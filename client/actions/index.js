import {apiPrefix} from '../../etc/config.json';
import api from '../api';

export const getMoviesList = data => ({
    type: "GET_MOVIES_LIST",
    data
});

export const addMoviesList = data => ({
    type: "ADD_MOVIES_LIST",
    data
});

export const addMovie = data => ({
    type: "ADD_MOVIE",
    data
});

export const removeMovie = id => ({
    type: "DELETE_MOVIE",
    id
});

export const changeCreateInput = data => ({
    type: "CHANGE_CREATE_INPUT",
    data
});

export const addActor = name => ({
    type: "ADD_ACTOR",
    name
});

export const deleteActor = id => ({
    type: "DELETE_ACTOR",
    id
});

export const clearCreateForm = () => ({
    type: "CLEAR_CREATE_FORM"
});

export const toggleCreatePopup = () => ({
    type: "TOGGLE_CREATE_POPUP"
});

export const changeFilterValue = value => ({
    type: "CHANGE_FILTER_VALUE",
    value
});

export const changeFilterBy = params => ({
    type: "CHANGE_FILTER_BY",
    params
});

export const changeSortBy = params => ({
    type: "CHANGE_SORT_BY",
    params
});

export const openMovieAbout = data => ({
    type: "OPEN_MOVIE_ABOUT",
    data
});

export const getMovies = () => {
    return async dispatch => {
        let response = await api.getMovies();
        if (response.status === 200) {
            dispatch(getMoviesList(response.data))
        }else{
            throw new Error (response.status);
        }
    }
};

export const addNewMovie = (movie) => {
    return async dispatch => {
        let response = await api.addMovie(movie);
        if (response.status === 200) {
            dispatch(addMovie(response.data));
            dispatch(toggleCreatePopup());
            dispatch(clearCreateForm());
        }else{
            throw new Error (response.status);
        }
    }
};

export const deleteMovie = (id) => {
    return async dispatch => {
        let response = await api.deleteMovie(id);
        if (response.status === 200) {
            dispatch(removeMovie(id))
        }else{
            throw new Error (response.status);
        }
    }
};

export const getFilteredMovies = (filters) => {
    return async dispatch => {
        let response = await api.filterMovie(filters);
        if (response.status === 200) {
            dispatch(getMoviesList(response.data))
        }else{
            throw new Error (response.status);
        }
    }
};

export const openMovie = (id) => {
    return async dispatch => {
        let response = await api.getMovie(id);
        if (response.status === 200) {
            dispatch(openMovieAbout(response.data));
        }else{
            throw new Error (response.status);
        }
    }
};
