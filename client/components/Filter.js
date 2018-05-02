import React from 'react';
import {connect} from 'react-redux';
import api from '../api';
//components
import CreateMovie from "./CreateMovie";
//actions
import { changeFilterValue, changeFilterBy, changeSortBy, getMoviesList } from '../actions'

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

    async function getFilteredMovies  () {
        const response = await api.filterMovie(filterParams);
        if (response.status === 200) {
            onGetFilterMovies(response.data)
        }else{
            throw new Error (response.status);
        }
    }

    return (
        <div className="filters">
            <div className="flex flex-between items-center">
                <input type="text"
                       className="input search-input"
                       placeholder="what do you want to find"
                       onChange={handleChangeFilterValue}
                       value={filter.filterValue}/>
                <div>
                    <p className="filter-label">filter by:</p>
                    <select onChange={handleChangeFilterBy}
                            value={filter.filterBy}
                            className="filter-select">
                        <option value="title">movie name</option>
                        <option value="actor">actors</option>
                    </select>
                    <p className="filter-label">sort by:</p>
                    <select onChange={handleChangeSortBy}
                            value={filter.sortBy}
                            className="filter-select">
                        <option value="">off</option>
                        <option value="a>z">A - Z</option>
                        <option value="z>a">Z - A</option>
                        <option value="rate-up">rate up</option>
                        <option value="rate-down">rate down</option>
                        <option value="year-up">year up</option>
                        <option value="year-down">year down</option>
                    </select>
                </div>
                <CreateMovie />
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
    filter: state.filters
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterChange: value => dispatch(changeFilterValue(value)),
        onChangeFilterBy: params => dispatch(changeFilterBy(params)),
        onChangSortBy: params => dispatch(changeSortBy(params)),
        onGetFilterMovies: data => dispatch(getMoviesList(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

