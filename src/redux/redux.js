import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { topPageReducer } from './reducers/topPageReducer'
import { aboutFilmReducer } from './reducers/aboutFilmReducer'
import { searchPageReducer } from './reducers/searchPageReducer'
import { savedFilmReducer } from './reducers/savedFilmReducer'

let reducers = combineReducers({
    topPage: topPageReducer,
    aboutFilmPage: aboutFilmReducer,
    searchPage: searchPageReducer,
    savedFilmPage: savedFilmReducer,
})


// function saveToLocalStorage(state) {
//     try {
//         const setSavedMovie = JSON.stringify(state.savedFilmPage)
//         localStorage.setItem('state', setSavedMovie)
//     } catch (e) {
//         console.log(e)
//     }
// }

// function loadFromLocalStorage() {
//     try {
//         const getSavedMovie = localStorage.getItem('state')
//         if (getSavedMovie === null) return undefined
//         return JSON.parse(getSavedMovie)
//     } catch (e) {
//         console.log(e)
//         return undefined
//     }
// }


// let store = createStore(reducers, applyMiddleware(thunkMiddleware))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store


window.store = store

// store.subscribe(() => saveToLocalStorage(store.getState()))
