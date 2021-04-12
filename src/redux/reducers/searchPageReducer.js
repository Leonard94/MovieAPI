import { movieAPI } from '../../api/api'
const IS_FETCHING = 'IS_FETCHING'
const SEARCH_RESULT = 'SEARCH_RESULT'
const FIELD_VALUE = 'FIELD_VALUE'

const initialState = {
    searchFieldValue: '',
    searchResult: [],
    isFetching: false,
}

export const searchPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case FIELD_VALUE:
            return {
                ...state,
                searchFieldValue: action.value
            }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.searchResult
            }

        default: return state
    }
}


export const searchFieldValue = (value) => ({ type: FIELD_VALUE, value })
const searchResultAC = (searchResult) => ({ type: SEARCH_RESULT, searchResult })
const isFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })

export const searchFilmByNameThunk = (name) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        movieAPI.searchMovieByName(name)
            .then(response => {
                dispatch(searchResultAC(response.data.results))
                dispatch(isFetchingAC(false))
            })
    }
}