const initialState = {
    actors: [],
    isOpened: false
};

export default function createMovie(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ACTOR':
            return {
                ...state,
                actors: [...state.actors, action.name]
            };
        case 'DELETE_ACTOR':
            return {
                ...state,
                actors: [...state.actors.filter((actorName, index) => index !== action.id)]
            };
        case 'CLEAR_ACTORS_LIST':
            return {
                ...state,
                actors: []
            };
        case 'TOGGLE_CREATE_POPUP':
            return{
                ...state,
                isOpened: !state.isOpened
            };

        default:
            return state
    }
}