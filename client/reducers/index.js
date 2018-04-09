import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';
import createMovie from './create-movie'
import filter from './filter';
import movieAbout from './movie-about'

// import api from '../api';

export default combineReducers(
    {
        routing: routerReducer,
        movies,
        createMovie,
        filter,
        movieAbout
    }
);