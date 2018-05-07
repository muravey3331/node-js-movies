import express from 'express';
import bodyParser from 'body-parser'
import * as db from './utils/DataBaseUtils';
import {serverPort} from '../etc/config.json'
import cors from 'cors';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());
// Allow requests from any origin
app.use(cors({origin: '*'}));

app.get('/movies', async (req, res) => {
    let data = await db.moviesList();
    res.send(data);
});

app.post('/movies', async (req, res) => {
    let data = await db.createMovie(req.body);
    res.send(data);
});

app.delete('/movie/:id', async (req, res) => {
    let data = await db.deleteMovie(req.params.id);
    res.send(data);
});

app.post('/movies/filter', async (req, res) => {
    let data = await db.filterMovie(req.body);
    res.send(data);
});

app.post('/movies/load_file', async (req, res) => {
    let data = await db.loadFile(req.body);
    res.send(data);
});

app.get('/movies/open_movie/:id', async (req, res) => {
    let data = await db.getMovieAbout(req.params.id);
    res.send(data);
});

const server = app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log(`server is running on port 3000`);
});



