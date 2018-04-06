const initialState = {
    title:  "",
    text:   "",
    image:  "",
    rate:   null,
    format: "VHS",
    year:   null,
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
        case 'CLEAR_CREATE_FORM':
            return {
                ...state,
                title:  "",
                text:   "",
                image:  "",
                rate:   null,
                format: "VHS",
                year:   null,
                actors: [],
            };
        case 'TOGGLE_CREATE_POPUP':
            return{
                ...state,
                isOpened: !state.isOpened
            };
        case 'CHANGE_CREATE_INPUT':
            return{
                ...state,
                [action.data.key]: action.data.value
            };

        default:
            return state
    }
}