import {combineReducers} from 'redux';
import movies from './movies';
import createMovie from './create-movie'
import filter from './filter';
// import api from '../api';

export default combineReducers(
    {
       movies,
        createMovie,
        filter
    }
);