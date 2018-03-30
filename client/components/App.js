import React, { Component } from 'react';
import {connect} from 'react-redux';
import api from '../api';
//components
import MoviesList from "./MoviesList";
import Filter from "./Filter";
import CreateMovie from "./CreateMovie";


class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        api.getMovies().then(data => this.props.onGetMovies(data.data));
    }


    render(){
        return (<div>
            <Filter/>
            <CreateMovie />
            <MoviesList />
        </div>)
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGetMovies: (data) => {
            dispatch({type: "GET_MOVIES_LIST", data})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)