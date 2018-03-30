import React, {Component} from 'react';
import {connect} from 'react-redux';


const Actor = ({ onDeleteActor, name, id}) => {

    const handleDeleteActor = (e) => {
        e.preventDefault();
        onDeleteActor(id)
    };

    return (
        <div>
            {name}
            <button onClick={handleDeleteActor}>X</button>
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
        onDeleteActor: (id) => {
            dispatch({type: "DELETE_ACTOR", id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actor)