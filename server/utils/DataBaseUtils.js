import mongoose from 'mongoose';
import '../models/Movie';
import config from '../../etc/config.json'

const Movie = mongoose.model('Movie');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function moviesList() {
    return Movie.find()
}

export function createMovie(data) {
    const movie = new Movie({
        title: data.title,
        text: data.text,
        img: data.img,
        rate: data.rate,
        actors: data.actors
    });
    return movie.save();
}

export function deleteMovie(id) {
    return Movie.findById(id).remove();
}

export function filterMovie(data) {
    console.log('filter data:', data);
    let filteredMovies = Movie;
    switch (data.filterBy) {
        case 'title':
            filteredMovies = filteredMovies.find({"title": {"$regex": data.filterValue, "$options": "i"}});
            break;
        case 'actor':
            filteredMovies = filteredMovies.find({"actors": {"$regex": data.filterValue, "$options": "i"}});
            break;
    }
    switch (data.sortBy) {
        case 'a>z':
            filteredMovies = filteredMovies.sort({ title: 'asc', test: -1 });
            break;
        case 'z>a':
            filteredMovies = filteredMovies.sort({ title: 'desc', test: -1 });
            break;
        case 'rate-up':
            filteredMovies = filteredMovies.sort({ rate: 'asc', test: -1 });
            break;
        case 'rate-down':
            filteredMovies = filteredMovies.sort({ rate: 'desc', test: -1 });
            break;
    }

    return filteredMovies;
}