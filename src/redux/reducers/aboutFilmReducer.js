import { movieAPI } from '../../api/api'
const SET_ABOUT_MOVIE = 'SET_ABOUT_MOVIE'
const IS_FETCHING = 'IS_FETCHING'

const initialState = {
    aboutMovie: null,
    isFetching: false,
}


export const aboutFilmReducer = (state = initialState, action) => {
    switch (action.type) {

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case SET_ABOUT_MOVIE:
            return {
                ...state,
                aboutMovie: action.aboutMovie
            }

        default: return state
    }
}

const setAboutMovieAC = (aboutMovie) => ({ type: SET_ABOUT_MOVIE, aboutMovie })
const isFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })



export const getAboutMovieThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        movieAPI.getAboutMovie(id)
        .then(response => {
            dispatch(setAboutMovieAC(response.data))
            dispatch(isFetchingAC(false))
        })
    }
}