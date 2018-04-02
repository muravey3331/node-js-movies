import React from 'react';
import {connect} from 'react-redux';
import api from '../api';
//components
import ActorsList from './ActorsList';


const CreateMovie = ({onAddMovie, onClearActorsList, actors}) => {
    let movie = {
        title: "",
        text: "",
        img: "",
        rate: "",
        actors
    };

    const addMovie = (e) => {
        e.preventDefault();

        let data = {
            title: movie.title.value,
            text: movie.text.value,
            img: movie.img.value,
            rate: +movie.rate.value,
            actors
        };

        api.addMovie(data)
            .then(data => onAddMovie(data.data))
            .then(() => {
                movie.title.value = "";
                movie.text.value = "";
                movie.img.value = "";
                movie.rate.value = "";
                onClearActorsList();
            });
    };
    const handleLoadFile = (e) => {
        if ( ! (window.File && window.FileReader && window.FileList && window.Blob)) {
            alert('The File APIs are not fully supported in this browser.');
        }
        const file = e.target.files[0];
        const reader = new FileReader();
        let fileStr;
        reader.onload = (e) => {
            fileStr = e.target.result;
            console.log(fileStr);
            api.loadFile(fileStr);
        };
        reader.readAsText(file);
    };



    return (
        <div>
            <form action=""
                  className="add-movie-form">
                <h3>Add your movie</h3>
                <div>
                    <input
                        name="title"
                        type="text"
                        placeholder="Movie title"
                        className="input"
                        ref={(input) => {
                            movie.title = input;
                        }}/>
                </div>
                <div>
                    <textarea name="text"
                              id=""
                              cols="30"
                              rows="10"
                              placeholder="Movie description"
                              className="input-area"
                              ref={(input) => {
                                  movie.text = input;
                              }}/>
                </div>
                <div>
                    <input name="img"
                           type="text"
                           placeholder="Img url"
                           className="input"
                           ref={(input) => {
                               movie.img = input;
                           }}/>
                </div>
                <div>
                    <input name="rate"
                           type="text"
                           placeholder="rate"
                           className="input"
                           ref={(input) => {
                               movie.rate = input;
                           }}/>
                </div>
                <ActorsList/>
                <div>
                    <button onClick={addMovie}
                            className="button">add movie
                    </button>
                </div>
            </form>
            <h2>or download your file</h2>
            <form action="">
                <input type="file" onChange={handleLoadFile}/>
            </form>
        </div>
    )
};


function mapStateToProps(state) {
    return {
        actors: state.createMovie.actors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddMovie: data => {
            dispatch({type: "ADD_MOVIE", data})
        },
        onClearActorsList: () => {
            dispatch({type: "CLEAR_ACTORS_LIST"})
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie)