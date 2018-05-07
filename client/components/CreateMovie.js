import React from 'react';
import {connect} from 'react-redux';
import api from '../api';
//components
import CreateMovieForm from './CreateMovieForm';
//actions
import { clearCreateForm, loadMoviesList, toggleCreatePopup } from '../actions/createForm'

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
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            alert('The File APIs are not fully supported in this browser.');
            return;
        }
        let fileObj = {};
        const reader = new FileReader();
        reader.onload = async function (e) {
            fileObj.file = e.target.result;
            await onAddMoviesList(fileObj);
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
                        <h3 className="add-movie-form__title">Or add your file with movie(s)</h3>
                        <div>
                            <input id="file" className="input-file" type="file" onChange={handleAddFile}/>
                            <label htmlFor="file">Choose a file ...</label>
                        </div>
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
        // onAddMovie: data => dispatch(addMovie(data)),
        onClearForm: () => dispatch(clearCreateForm()),
        onAddMoviesList: file => dispatch(loadMoviesList(file)),
        onTogglePopup: () => dispatch(toggleCreatePopup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie)