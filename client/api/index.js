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
            img: data.img,
            rate: data.rate,
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
        const formData = new FormData(file);
        formData.append(`file`, file);
        return axios.post( `${apiPrefix}/load_file`, formData )
    }
}

