import express from 'express';
import bodyParser from 'body-parser'
import * as db from './utils/DataBaseUtils';
import { serverPort } from '../etc/config.json'
import cors from 'cors';
import fs from 'file-system';

db.setUpConnection();

const app = express();

app.use( bodyParser.json());
// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.get('/movies', (req, res) => {
    db.moviesList().then(data => res.send(data));
});

app.post('/movies', (req, res) => {
    db.createMovie(req.body).then(data => res.send(data));
});

app.delete('/movie/:id', (req, res) => {
    db.deleteMovie(req.params.id).then(data => res.send(data));
});

app.post('/movies/filter', (req, res) => {
    db.filterMovie(req.body).then(data => res.send(data));
});

app.post('/movies/load_file', (req, res) => {
    res.send(db.loadFile(req.body));
});

const server = app.listen(3000, (err) =>{
    if (err) console.log(err);
    console.log(`server is running on port ${serverPort}`);
});



