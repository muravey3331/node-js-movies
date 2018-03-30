import React from 'react';
import {connect} from 'react-redux';
import api from '../api';


const Filter = ({ onGetFilterMovies, onFilterChange, filterValue}) => {
    let filterParams = {
        key: "",
        filterBy: "title"
    };

    const handleFilterChange = (e) => {
        onFilterChange(e.target.value);
        filterParams.key = e.target.value;

        api.filterMovie(filterParams)
            .then(data => {
                return onGetFilterMovies(data.data)})
    };

    const handleFilterSelect = (e) => {
        console.log(e.target.value);
        filterParams.filterBy = e.target.value;

        api.filterMovie(filterParams)
            .then(data => {
                return onGetFilterMovies(data.data)})
    };


    return (
        <div>
            <input type="text"
                   className="input"
                   placeholder="what do you want to find"
                   onChange={handleFilterChange}/>
            filter by:
            <select name="" id="" onChange={handleFilterSelect}>
                <option value="title">movie name</option>
                <option value="actor">actors</option>
            </select>
        </div>
    )
};




const mapStateToProps = (state) => {
    return {
    filterValue: state.filter.key
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterChange: (value) =>{
            dispatch({type: 'CHANGE_FILTER_VALUE', value });

        },
        onGetFilterMovies: (data) => {
            dispatch({type: "GET_MOVIES_LIST", data})
        }}
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

