import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title:  {type: String},
    text:   {type: String, require: true},
    img:    {type: String},
    actors: {type: Array}
});

const Movie = mongoose.model("Movie", MovieSchema);

