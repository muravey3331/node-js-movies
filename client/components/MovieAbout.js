import React from 'react';
import {connect} from 'react-redux';

//components

import Header from './Header';

const MovieAbout = () => {
    return (
        <div>
            <Header />
            <h1>Movie</h1>
        </div>
    )
};



function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieAbout)