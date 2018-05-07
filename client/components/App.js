import React, { Component } from 'react';
import {connect} from 'react-redux';


import { Router, Route} from 'react-router-3';

//components
import MoviesList from "./MoviesList";
import MovieAbout from "./MovieAbout";

//actions
import { getMovies } from '../actions/moviesList';

class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.onGetMovies();
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
        onGetMovies: () => dispatch(getMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)