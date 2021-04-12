import { movieAPI } from '../../api/api'
const GET_MOVIE_TOP = 'GET_MOVIE_TOP'
const IS_FETCHING = 'IS_FETCHING'
const SET_NEW_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    topMoviesList: null,
    isFetching: false,
    currentPage: 1,
}

export const topPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case GET_MOVIE_TOP:
            return {
                ...state,
                topMoviesList: action.topMoviesList
            }

            case SET_NEW_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.setNewPage
                }

        default: return state
    }
}

// ActionCreators
export const getMovieTopAC = (topMoviesList) => ({ type: GET_MOVIE_TOP, topMoviesList })
const isFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })
export const setNewCurrentPage = (setNewPage) => ({type: SET_NEW_CURRENT_PAGE, setNewPage} )

// Thunks
export const getMovieTopThunkCreator = (page) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        movieAPI.getMovieTop(page).then(response => {
            dispatch(getMovieTopAC(response.data.results))
            dispatch(isFetchingAC(false))
        })

    }
}
