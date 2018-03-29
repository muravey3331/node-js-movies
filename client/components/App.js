import React, { Component } from 'react';
import {connect} from 'react-redux';
import MoviesList from "./MoviesList";
import Filter from "./Filter";
import Form from "./Form";
import api from '../api';




class App extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        api.getMovies().then(data => this.props.onGetMovies(data.data));

    }

    render(){
        return (<div>
            <Form />
            <Filter/>
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