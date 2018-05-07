
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

export default function movieAbout(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MOVIE_ABOUT':
            console.log(action.data);
            return{
                ...state,
                ...action.data
            };
        default:
            return state
    }
}