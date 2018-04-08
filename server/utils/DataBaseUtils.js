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
        image: data.image,
        rate: +data.rate,
        format: data.format,
        actors: data.actors,
        year: +data.year
    });
    return movie.save();
}

export function deleteMovie(id) {
    return Movie.findById(id).remove();
}

export function filterMovie(data) {
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
            filteredMovies = filteredMovies.sort({title: 'asc', test: -1});
            break;
        case 'z>a':
            filteredMovies = filteredMovies.sort({title: 'desc', test: -1});
            break;
        case 'rate-up':
            filteredMovies = filteredMovies.sort({rate: 'asc', test: -1});
            break;
        case 'rate-down':
            filteredMovies = filteredMovies.sort({rate: 'desc', test: -1});
            break;
        case 'year-up':
            filteredMovies = filteredMovies.sort({year: 'asc', test: -1});
            break;
        case 'year-down':
            filteredMovies = filteredMovies.sort({year: 'desc', test: -1});
            break;
    }
    return filteredMovies;
}

export function loadFile(fileObj) {

    let movies = fileObj.file.split(/\r\n\n|\n\n/);
    movies = movies.map(movie => {
        let obj = {};
        movie.split(/\r\n|\n/).map(item => {
            let itemArr = item.split(": ");
            obj[itemArr[0].toLowerCase()] = itemArr[1];
        });
        obj.actors = obj.actors.split(',');
        return obj;
    });
   return Promise.all(movies.map( createMovie )).then(result => result);
}
