import mongoose from 'mongoose';
import '../models/Movie';
import config from '../../etc/config.json'

const Movie = mongoose.model('Movie');

export function setUpConnection () {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function moviesList () {
    return Movie.find()
}

export function createMovie (data){
    const movie = new Movie({
        title: data.title,
        text: data.text,
        img: data.img
    });
    return movie.save();
}

export function deleteMovie (id) {
    return Movie.findById(id).remove();
}