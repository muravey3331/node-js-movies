import AppDispatcher from '../dispatcher/Appdispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const MovieAction = {
    loadMovies() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_MOVIES_REQUEST
        });

        api.listMovies()
            .then(({data}) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_MOVIES_SUCCESS,
                    movies: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_MOVIES_FAIL,
                    error: err
                })
            );
    },
    createMovie(movie){
        api.createMovie(movie)
            .then(() => this.loadMovies())
            .catch(err => console.log(err))
    },
    deleteMovie(movieId){
        api.deleteMovie(movieId)
            .then(() => this.loadMovies())
            .catch(err => console.log(err))

    }
};