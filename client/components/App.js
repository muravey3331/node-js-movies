import React, { Component } from 'react';
import {connect} from 'react-redux';
import api from '../api';

import { Router, Route} from 'react-router-3';

//components
import MoviesList from "./MoviesList";
import MovieAbout from "./MovieAbout";

//actions
import { getMoviesList } from '../actions';

class App extends Component {
    constructor(props){
        super(props);
    }

    async componentDidMount() {
        let response = await api.getMovies();
        if (response.status === 200) {
            this.props.onGetMovies(response.data)
        }else{
            throw new Error (response.status);
        }
    }

    render(){
        return (
            <Router history={this.props.history}>
                <div>
                    <Route path="/" component={MoviesList}/>
                    <Route path="/movie/:id" component={MovieAbout}/>
                </div>
            </Router>
        )
    }
}
function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGetMovies: data => dispatch(getMoviesList(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)