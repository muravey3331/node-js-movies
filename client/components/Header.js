import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-3';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/">
                    <div className="logo">
                        <img src="/images/video-camera.svg" alt=""/>
                        <p className="logo-text">MOVIES</p>
                    </div>
                </Link>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
       
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

