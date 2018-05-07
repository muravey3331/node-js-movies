import {apiPrefix} from '../../etc/config.json';
import api from '../api';

export const GET_MOVIES_LIST = "GET_MOVIES_LIST";

export const getMoviesList = data => ({
    type: GET_MOVIES_LIST,
    data
});

export const getMovies = () => {
    return async dispatch => {
        try {
            let response = await api.getMovies();
            if (response.status === 200){
                dispatch(getMoviesList(response.data))
            }
        } catch (err) {
            throw new Error(err);
        }
    }
};