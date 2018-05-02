const initialState = {
    filterValue: "",
    filterBy: "title",
    sortBy: ""
};

export default function filter(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_FILTER_VALUE':
            return {
                ...state,
                filterValue: action.value
            };
        case 'CHANGE_FILTER_BY' :
            return {
                ...state,
                filterBy:action.params.filterBy
            };
        case 'CHANGE_SORT_BY':
            return {
                ...state,
            sortBy: action.params.sortBy
            };

        default:
            return state
    }
}





