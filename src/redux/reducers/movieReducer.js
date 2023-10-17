import { actionTypes } from "../actions/actionstypes";

const initialState = {
    popularMovies: [],
    genres: [],
    isLoading: true,
    isError: false
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIES:
            return {
                ...state,
                popularMovies: action.payload,
                isLoading:false
            };
        case actionTypes.SET_GENRES:
            return{
                ...state,
                genres:action.payload,
                isLoading:false
            }
        default:
            return state;
    }
}
