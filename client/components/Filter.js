import React from 'react';
import {connect} from 'react-redux';
import api from '../api';


const Filter = ({ onGetFilterMovies, onFilterChange, filterBy}) => {
    let filterParams = {
        filterValue: "",
        filterBy: filterBy
    };

    const handleChangeFilterValue = (e) => {
        filterParams.filterValue = e.target.value;
        onFilterChange(e.target.value);
        getFilteredMovies();
    };


    const handleChangeFilterBy = (e) => {
        console.log(e.target.value);
        filterParams.filterBy = e.target.value;
        getFilteredMovies();
    };

    const getFilteredMovies = () => {
        api.filterMovie(filterParams)
            .then(data => {
                return onGetFilterMovies(data.data)})
    };


    return (
        <div>
            <input type="text"
                   className="input"
                   placeholder="what do you want to find"
                   onChange={handleChangeFilterValue}/>
            filter by:
            <select name="" id="" onChange={handleChangeFilterBy}>
                <option value="title">movie name</option>
                <option value="actor">actors</option>
            </select>
        </div>
    )
};




const mapStateToProps = (state) => {
    return {
    filterValue: state.filter
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

