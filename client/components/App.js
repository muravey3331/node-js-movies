import React, { Component } from 'react';
import MoviesList from "./MoviesList";
import Filter from "./Filter";



class App extends Component {
    render(){
        return (<div>
            <Filter/>
            <MoviesList />
        </div>)
    }
}

export default App;