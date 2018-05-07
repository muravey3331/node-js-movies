import {apiPrefix} from '../../etc/config.json';
import api from '../api';

export const ADD_MOVIES_LIST     = "ADD_MOVIES_LIST";
export const CHANGE_CREATE_INPUT = "CHANGE_CREATE_INPUT";
export const ADD_ACTOR           = "ADD_ACTOR";
export const DELETE_ACTOR        = "DELETE_ACTOR";
export const CLEAR_CREATE_FORM   = "CLEAR_CREATE_FORM";
export const TOGGLE_CREATE_POPUP = "TOGGLE_CREATE_POPUP";

export const addMoviesList = data => ({
    type: ADD_MOVIES_LIST,
    data
});

export const changeCreateInput = data => ({
    type: CHANGE_CREATE_INPUT,
    data
});

export const addActor = name => ({
    type: ADD_ACTOR,
    name
});

export const deleteActor = id => ({
    type: DELETE_ACTOR,
    id
});

export const clearCreateForm = () => ({
    type: CLEAR_CREATE_FORM
});

export const toggleCreatePopup = () => ({
    type: TOGGLE_CREATE_POPUP
});

export const loadMoviesList = (file) => {
    return async dispatch => {
        try {
            let response = await api.loadFile(file);
            if (response.status === 200) {
                dispatch(addMoviesList(response.data));
                dispatch(toggleCreatePopup())
            }
        } catch (err) {
            throw new Error(err);
        }
    }
};