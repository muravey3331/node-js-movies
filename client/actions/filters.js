import {apiPrefix} from '../../etc/config.json';
import api from '../api';
import {getMoviesList} from './moviesList';

export const CHANGE_FILTER_VALUE = "CHANGE_FILTER_VALUE";
export const CHANGE_FILTER_BY    = "CHANGE_FILTER_BY";
export const CHANGE_SORT_BY      = "CHANGE_SORT_BY";

export const changeFilterValue = value => ({
    type: CHANGE_FILTER_VALUE,
    value
});

export const changeFilterBy = params => ({
    type: CHANGE_FILTER_BY,
    params
});

export const changeSortBy = params => ({
    type: CHANGE_SORT_BY,
    params
});

export const getFilteredMovies = (filters) => {
    return async dispatch => {
        try{
            let response = await api.filterMovie(filters);
            if (response.status === 200){
                dispatch(getMoviesList(response.data))
            }
        } catch (err){
            throw new Error (err);
        }
    }
};