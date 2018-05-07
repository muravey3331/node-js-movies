import React from 'react';
import {connect} from 'react-redux';
//components
import ActorsList from './ActorsList';
//actions
import {changeCreateInput, addNewMovie} from '../actions'

const CreateMovie = ({onInputChange, onAddMovie, state}) => {

    const handleInputChange = (e) => {
        onInputChange(e.target.name, e.target.value)
    };

    function handleAddMovie(e) {
        e.preventDefault();
        let data = {
            title: state.title,
            text: state.text,
            image: state.image,
            rate: +state.rate,
            format: state.format,
            year: +state.year,
            actors: state.actors
        };
        if (data.title &&
            data.text &&
            data.rate &&
            data.rate <= 10 &&
            data.year &&
            data.actors) {

            onAddMovie(data);
        } else {
            alert('Fill in all the fields');
        }
    }

    return (
        <form action=""
              className="add-movie-form">
            <h3 className="add-movie-form__title">Add your movie options</h3>
            <div>
                <input
                    name="title"
                    type="text"
                    placeholder="Movie title"
                    className="input"
                    onChange={handleInputChange}
                    value={state.title}/>
            </div>
            <div>
                <textarea name="text"
                          placeholder="Movie description"
                          className="input-area"
                          onChange={handleInputChange}
                          value={state.text}/>
            </div>
            <div>
                <input name="image"
                       type="text"
                       placeholder="Img url"
                       className="input"
                       onChange={handleInputChange}
                       value={state.image}/>
            </div>
            <div>
                <input name="rate"
                       type="text"
                       placeholder="rate"
                       className="input"
                       onChange={handleInputChange}
                       value={state.rate}/>
            </div>
            <div>
                <input name="year"
                       type="text"
                       placeholder="released year"
                       className="input"
                       onChange={handleInputChange}
                       value={state.year}/>
            </div>
            <div>
                <select name="format"
                        className="input"
                        onChange={handleInputChange}
                        value={state.format}>
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
    )
};


function mapStateToProps(state) {
    return {
        state: state.createMovie
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInputChange: (field, value) => {
            const data = {key: field, value};
            dispatch(changeCreateInput(data))
        },
        onAddMovie: data => {
            dispatch(addNewMovie(data));

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie)