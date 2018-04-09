const initialState = [];

export default function card(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES_LIST':
            return action.data;
        case 'ADD_MOVIE':
            return [
                ...state,
                action.data
            ];

        case 'DELETE_MOVIE':
            return state.filter(movie =>  movie._id !== action.id);

        case 'ADD_MOVIES_LIST':
            return [
                ...state,
                ...action.data
            ];
        default:
            return state
    }
}