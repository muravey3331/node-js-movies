export const getMoviesList = data => ({
    type: "GET_MOVIES_LIST",
    data
});

export const addActor = name => ({
    type: "ADD_ACTOR",
    name
});

export const deleteActor = id => ({
    type: "DELETE_ACTOR",
    id
});

export const addMovie = data => ({
    type: "ADD_MOVIE",
    data
});

export const clearCreateForm = () => ({
    type: "CLEAR_CREATE_FORM"
});

export const addMoviesList = data => ({
    type: "ADD_MOVIES_LIST",
    data
});

export const toggleCreatePopup = () => ({
    type: "TOGGLE_CREATE_POPUP"
});

export const changeCreateInput = data => ({
    type: "CHANGE_CREATE_INPUT",
    data
});

export const clearForm = () => ({
    type: "TOGGLE_CREATE_POPUP"
});

export const changeFilterValue = value => ({
    type: "CHANGE_FILTER_VALUE",
    value
});

export const changeFilterBy = params => ({
    type: "CHANGE_FILTER_BY",
    params
});

export const changeSortBy = params => ({
    type: "CHANGE_SORT_BY",
    params
});

export const deleteMovie = id => ({
    type: "DELETE_MOVIE",
    id
});

export const openMovieAbout = data => ({
    type: "OPEN_MOVIE_ABOUT",
    data
});
