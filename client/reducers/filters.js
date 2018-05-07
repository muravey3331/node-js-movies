import { CHANGE_FILTER_VALUE, CHANGE_FILTER_BY, CHANGE_SORT_BY } from '../actions/filters';

const initialState = {
    filterValue: "",
    filterBy: "title",
    sortBy: ""
};

export default function filters(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FILTER_VALUE:
            return {
                ...state,
                filterValue: action.value
            };
        case CHANGE_FILTER_BY :
            return {
                ...state,
                filterBy:action.params.filterBy
            };
        case CHANGE_SORT_BY:
            return {
                ...state,
            sortBy: action.params.sortBy
            };

        default:
            return state
    }
}





