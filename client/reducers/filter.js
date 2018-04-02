const initialState = {
    filterValue: "",
    filterBy: "title"



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
                filterBy:action.filterBy
            };

        default:
            return state
    }
}




