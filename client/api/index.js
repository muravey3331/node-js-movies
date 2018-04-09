import React, { Component } from 'react';
import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';

export default {
    getMovies() {
       return axios.get(`${apiPrefix}/movies`)
    },

    addMovie(data) {
        const movie = {
            title: data.title,
            text: data.text,
            image: data.image,
            rate: data.rate,
            format: data.format,
            year: data.year,
            actors: data.actors
        };
        return axios.post(`${apiPrefix}/movies`, movie)
    },
    deleteMovie(id) {
        return axios.delete(`${apiPrefix}/movie/${id}`)
    },
    filterMovie (data) {
        return axios.post(`${apiPrefix}/movies/filter`, data)
    },
    loadFile(file){
        return axios.post(`${apiPrefix}/movies/load_file`, file )
    },
    getMovie(id){
        return axios.get(`${apiPrefix}/movies/open_movie/${id}`)
    }
}


