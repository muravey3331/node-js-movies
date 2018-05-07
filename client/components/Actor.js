import React, {Component} from 'react';
import {connect} from 'react-redux';

//actions
import { deleteActor } from '../actions/createForm'

const Actor = ({ onDeleteActor, name, id}) => {

    const handleDeleteActor = (e) => {
        e.preventDefault();
        onDeleteActor(id)
    };

    return (
        <div>
            <div className="actor-create-name">{name}</div>
            <button
                className="button-delete-actor"
                onClick={handleDeleteActor}/>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        actor: state.createMovie.actors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteActor: id => dispatch(deleteActor(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actor)