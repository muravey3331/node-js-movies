import React from 'react';
import {connect} from 'react-redux';
import api from '../api';
//components
import CreateMovieForm from './CreateMovieForm';

const CreateMovie = ({onClearForm, onTogglePopup, onAddMoviesList, state}) => {

    const handleTogglePopup = () => {
        onTogglePopup();
        onClearForm();
    };

    let file;
    const handleAddFile = (e) => {
        file = e.target.files[0];
    };

    const handleLoadFile = (e) => {
        e.preventDefault();
        console.log('loading file');
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            alert('The File APIs are not fully supported in this browser.');
        }
        let fileObj = {};
        const reader = new FileReader();
        reader.onload = (e) => {
            fileObj.file = e.target.result;
            api.loadFile(fileObj).then(data => {
                console.log(data);
                handleTogglePopup();
            });
        };
        reader.readAsText(file);
    };

    return (
        <div>
            <button className="button"
            onClick={handleTogglePopup}>Add Movie</button>
            <div className={state.isOpened ? "add-movie-popup open" : "add-movie-popup"}>
                <div className={state.isOpened ? "popup-wrapper open" : "popup-wrapper"} >
                    <button onClick={handleTogglePopup}
                            className="button-close-popup" />
                    <CreateMovieForm handleTogglePopup={handleTogglePopup}/>
                    <form action="">
                        <h4>or add your file with movie(s)</h4>
                        <input type="file" onChange={handleAddFile}/>
                        <button onClick={handleLoadFile}
                                className="button">Load file</button>
                    </form>
                </div>
            </div>
        </div>
    )
};


function mapStateToProps(state) {
    return {
        state: state.createMovie
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddMovie: data => {
            dispatch({type: "ADD_MOVIE", data})
        },
        onClearForm: () => {
            dispatch({type: "CLEAR_CREATE_FORM"})
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