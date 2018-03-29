const initialState = {
    title:'',
    text: '',
    img: '',
    actors: ['Brad Pitt', 'Tom Hanks']
};


export default function createMovie(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ACTOR':
            return {
                ...state,
                actors: [...state.actors, action.name]
            };
        case 'REMOVE_ACTOR':
            return ;
        default:
            return state
    }
}



