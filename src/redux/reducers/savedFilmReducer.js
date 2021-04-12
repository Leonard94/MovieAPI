import { movieAPI } from '../../api/api'
const FOLLOWING_IN_PROGRESS = 'IS_FETCHING'
const FOLLOW_MOVIE = 'FOLLOW_MOVIE'

const initialState = {
    savedMovie: [],
    followingInProgress: false,
}


export const savedFilmReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
            }

        case FOLLOW_MOVIE:
            return {
                ...state,
                savedMovie: [...state.savedMovie, action.aboutMovie]
            }

        default: return state
    }
}

const followMovie = (aboutMovie) => ({ type: FOLLOW_MOVIE, aboutMovie })
const followingInProgressAC = (followingInProgress) => ({ type: FOLLOWING_IN_PROGRESS, followingInProgress })

export const saveTheMovieThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(followingInProgressAC(true))
        movieAPI.getAboutMovie(id)
            .then(response => {
                dispatch(followMovie(response.data))
                dispatch(followingInProgressAC(false))
            })
    }
}