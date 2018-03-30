const initialState = {
    key: ''

};

export default function filter(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_FILTER_VALUE':
            return {
                ...state,
                key: action.value
            };

        default:
            return state
    }
}




