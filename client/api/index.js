import React, { Component } from 'react';
import axios from 'axios';

export default {
    getMovies() {
       return axios.get(`http://localhost:3000/movies`)
    },

    addMovie(data) {
        const movie = {
            title: data.title,
            text: data.text,
            img: data.img
        };
        return axios.post(`http://localhost:3000/movies`, movie)
    },
    deleteMovie(id) {
        return axios.delete(`http://localhost:3000/movie/${id}`)
    }
}