import React from 'react';
import {connect} from 'react-redux';
import api from '../api';


const Filter = ({ onGetFilterMovies, onFilterChange, onChangeFilterBy, onChangSortBy, filter}) => {
    let filterParams = {
        filterValue: filter.filterValue,
        filterBy: filter.filterBy,
        sortBy: filter.sortBy
    };

    const handleChangeFilterValue = (e) => {
        filterParams.filterValue = e.target.value;
        onFilterChange(e.target.value);
        getFilteredMovies();
    };

    const handleChangeFilterBy = (e) => {
        filterParams.filterBy = e.target.value;
        onChangeFilterBy(filterParams);
        getFilteredMovies();
    };

    const handleChangeSortBy = (e) => {
        filterParams.sortBy = e.target.value;
        onChangSortBy(filterParams);
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
            sort by:
            <select name="" id="" onChange={handleChangeSortBy}>
                <option value="">off</option>
                <option value="a>z">A - Z</option>
                <option value="z>a">Z - A</option>
                <option value="rate-up">rate up</option>
                <option value="rate-down">rate down</option>
            </select>
        </div>
    )
};




const mapStateToProps = (state) => {
    return {
    filter: state.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterChange: (value) =>{
            dispatch({type: 'CHANGE_FILTER_VALUE', value });

        },
        onChangeFilterBy: (params) => {
            dispatch({type: 'CHANGE_FILTER_BY', params})
        },
        onChangSortBy: (params) => {
          dispatch({type: 'CHANGE_SORT_BY', params})
        },
        onGetFilterMovies: (data) => {
            dispatch({type: "GET_MOVIES_LIST", data})
        }}
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

