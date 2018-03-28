import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default  {
    listMovies() {
        return axios.get(`${apiPrefix}/movies`);
    },
    createMovie() {
        return axios.post(`${apiPrefix}/movies`, data);
    },
    deleteMovie(movieId) {
        return axios.delete(`${apiPrefix}/movie/${movieId}`);
    }
}

