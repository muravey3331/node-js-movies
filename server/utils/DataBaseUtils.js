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
        img: data.img,
        actors: data.actors
    });
    return movie.save();
}

export function deleteMovie (id) {
    return Movie.findById(id).remove();
}

export function filterMovie (data) {
    console.log('filter data:', data);
    if(data.filterBy === 'title'){
        return Movie.find({ "title": { "$regex": data.key, "$options": "i" } });
    }else if(data.filterBy === 'actor'){
        return Movie.find()
            .filter(movie => {
                movie.actors
                    .forEach(actor => ( actor.name.includes(data.key) ))
            });
    }


}