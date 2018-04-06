import express from 'express';
import bodyParser from 'body-parser'
import * as db from './utils/DataBaseUtils';
import { serverPort } from '../etc/config.json'
import cors from 'cors';

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
    db.parseFile(req.body).then(data => res.send(data));
});

const server = app.listen(3000, (err) =>{
    if (err) console.log(err);
    console.log(`server is running on port ${serverPort}`);
});



