import React from 'react';
import {connect} from 'react-redux';
import api from '../api';
//components
import ActorsList from './ActorsList';


const CreateMovie = ({  onAddMovie, onClearActorsList, onTogglePopup, onAddMoviesList, actors, isOpened}) => {
    let movie = {
        title:  null,
        text:   null,
        image:  null,
        rate:   null,
        format: null,
        year:   null,
        actors

    };
    const handleTogglePopup = () => {
        onTogglePopup()
    };

    const handleChangeFormat = (e) => {
        movie.format = e.target;
    };


    const handleAddMovie = (e) => {
        e.preventDefault();
        let data = {
            title:  movie.title.value,
            text:   movie.text.value,
            image:  movie.image.value,
            rate:   +movie.rate.value,
            format: movie.format.value,
            year:   +movie.year.value,
            actors: movie.actors
        };

        api.addMovie(data)
            .then(data => onAddMovie(data.data))
            .then(() => {
                movie.title.value   = null;
                movie.text.value    = null;
                movie.image.value   = null;
                movie.rate.value    = null;
                movie.format.value  = "VHS";
                movie.year.value    = null;
                onClearActorsList();
            });
        handleTogglePopup();
    };

    const handleLoadFile = (e) => {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            alert('The File APIs are not fully supported in this browser.');
        }
        const file = e.target.files[0];
        console.log('loading file');
        let fileObj = {};
        const reader = new FileReader();
        reader.onload = (e) => {
            fileObj.file = e.target.result;
            api.loadFile(fileObj).then(data => console.log(data));
        };
        reader.readAsText(file);
    };

    return (
        <div>
            <button className="button"
            onClick={handleTogglePopup}>Add Movie</button>
            <div className={isOpened ? "add-movie-popup open" : "add-movie-popup"}>
                <div className={isOpened ? "popup-wrapper open" : "popup-wrapper"} >
                    <button onClick={handleTogglePopup}
                            className="button-close-popup" />
                    <form action=""
                          className="add-movie-form">
                        <h3>Add your movie</h3>
                        <div>
                            <input
                                name="title"
                                type="text"
                                placeholder="Movie title"
                                className="input"
                                ref={e => {movie.title = e}}/>
                        </div>
                        <div>
                    <textarea name="text"
                              placeholder="Movie description"
                              className="input-area"
                              ref={e => {movie.text = e}} />
                        </div>
                        <div>
                            <input name="img"
                                   type="text"
                                   placeholder="Img url"
                                   className="input"
                                   ref={e => {movie.image = e}} />
                        </div>
                        <div>
                            <input name="rate"
                                   type="text"
                                   placeholder="rate"
                                   className="input"
                                   ref={e => {movie.rate = e}} />
                        </div>
                        <div>
                            <input name="year"
                                   type="text"
                                   placeholder="released year"
                                   className="input"
                                   ref={e => {movie.year = e}} />
                        </div>
                        <div>
                            <select name="format"
                                    onChange={handleChangeFormat}
                                    className="input"
                                    ref={e => {movie.format = e}} >
                                <option value="VHS">VHS</option>
                                <option value="DVD">DVD</option>
                                <option value="HD">HD</option>
                                <option value="Blu-Ray">Blu-Ray</option>
                            </select>
                        </div>
                        <ActorsList/>
                        <div>
                            <button onClick={handleAddMovie}
                                    className="button">Add movie
                            </button>
                        </div>
                    </form>
                    <h2>or download your file</h2>
                    <form action="">
                        <input type="file" onChange={handleLoadFile}/>
                    </form>
                </div>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        actors: state.createMovie.actors,
        isOpened: state.createMovie.isOpened
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddMovie: data => {
            dispatch({type: "ADD_MOVIE", data})
        },
        onClearActorsList: () => {
            dispatch({type: "CLEAR_ACTORS_LIST"})
        },
        onAddMoviesList: (data) => {
            dispatch({type: "ADD_MOVIES_LIST", data})
        },
        onTogglePopup: () => {
            dispatch({type: "TOGGLE_CREATE_POPUP"})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie)