import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';
import createMovie from './create-movie'
import filters from './filters';
import movieAbout from './movie-about'


export default combineReducers(
    {
        routing: routerReducer,
        movies,
        createMovie,
        filters,
        movieAbout
    }
);