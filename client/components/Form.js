import React, {Component} from 'react';
import {connect} from 'react-redux';
import api from '../api';

const Form = ({ onAddMovie }) => {
    let movie = {
        title: "",
        text: "",
        img: ""
    };


    const addMovie = (e) => {
        e.preventDefault();
        let data = {
            title: movie.title.value,
            text: movie.text.value,
            img: movie.img.value
        };
        api.addMovie(data)
            .then(data => onAddMovie(data.data))
            .then(() => {
                movie.title.value = "";
                movie.text.value = "";
                movie.img.value = "";
        });

    };

    return (
        <div>
            <form action="" onSubmit={addMovie}>
                <div>
                    <input
                    name="title"
                    type="text"
                    ref={(input) => { movie.title = input; }}/>
                </div>
                <div>
                    <textarea name="text"
                               id=""
                               cols="30"
                               rows="10"
                               ref={(input) => { movie.text = input; }}/>
                </div>
                <div>
                    <input name="img"
                            type="text"
                            ref={(input) => { movie.img = input; }}/>
                </div>
                <div>
                    <button onClick={addMovie}>add movie</button>
                </div>
            </form>
        </div>
    )
};


function mapStateToProps(state) {
    return {}
}


function mapDispatchToProps(dispatch) {
    return {
        onAddMovie: (data) => {
            dispatch({type: "ADD_MOVIE", data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)