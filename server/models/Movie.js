import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title:           {type: String},
    text:            {type: String, require: true},
    image:           {type: String},
    rate:            {type: Number},
    format:          {type: String},
    actors:          {type: Array},
    "released-year": {type: Number}

});

const Movie = mongoose.model("Movie", MovieSchema);

