import React from 'react';
import {connect} from 'react-redux';



const Header = () => {

    return (
        <div className="header">
            <div className="wrapper">
                <div className="logo">
                    <img src="./images/video-camera.svg" alt=""/>
                    <p className="logo-text">MOVIES</p>
                </div>
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

