import React, {Component} from 'react';
import {connect} from 'react-redux';
//components
import Actor from './Actor';

//actions
import { addActor } from '../actions/createForm';

const ActorsList = ({ actors, onAddActor}) => {
    let actorName;
    const handleAddActor = (e) => {
        e.preventDefault();
        if (actorName.value.length === 0) return;
        onAddActor(actorName.value);
        actorName.value = ''
    };

    return (
        <div>
            <div className="add-actor-form">
                <input type="text"
                       placeholder="Add actor"
                       className="input"
                       ref={ input => actorName = input }/>
                <button
                    onClick={handleAddActor}
                    className=" button button-add-actor">Add</button>
            </div>

            <ul className="actors-create-list">
                {actors.map((name, index) => (
                    <li key={index}
                        className="actors-create-item">
                        <Actor name={name} id={index}/>
                    </li>
                ))}
            </ul>
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
        onAddActor: name => dispatch(addActor(name))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ActorsList)