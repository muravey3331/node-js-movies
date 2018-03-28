import express from 'express';
import bodyParser from 'body-parser'
import * as db from './utils/DataBaseUtils';
import { serverPort } from '../ets/config.json'

db.setUpConnection();

const app = express();

app.use( bodyParser.json());

app.get('/movies', (req, res) => {
    db.moviesList().then(data => res.send(data));
});
app.post('/movies', (req, res) => {
    db.createMovie(req.body).then(date => res.send(data));
});
app.delete('/movies/:id', (req, res) => {
    db.deleteMovie(req.params.id).then(date => res.send(data));
});

const server = app.listen(3000, (err)=>{
    if (err) console.log(err);
    console.log(`server is running on port ${serverPort}`);

});



