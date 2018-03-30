import React, {Component} from 'react';
import {connect} from 'react-redux';
//components
import Actor from './Actor'


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
            <input type="text"
                   placeholder="Add actor"
                   className="input"
                   ref={ input => actorName = input }/>
            <button
                onClick={handleAddActor}
                className="button">add</button>
            <ul className="actors-create-list">
                {actors.map((actor, index) => (
                    <li key={index}
                    className="actors-create-item">
                        <Actor name={actor.name} id={actor.id}/>
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
        onAddActor: (name) => {
            let actor = {
                id: Date.now(),
                name
            };
            dispatch({type: "ADD_ACTOR", actor})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ActorsList)