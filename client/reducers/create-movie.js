const initialState = {
    title: '',
    text: '',
    img: '',
    actors: []
};

export default function createMovie(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ACTOR':
            return {
                ...state,
                actors: [...state.actors, action.actor]
            };
        case 'DELETE_ACTOR':
            return {
                ...state,
                actors: [...state.actors.filter(actor => actor.id !== action.id)]
            };
        case 'CLEAR_ACTORS_LIST':
            return {
                ...state,
                actors: []
            };
        default:
            return state
    }

}



