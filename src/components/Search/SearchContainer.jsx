import React from 'react'
import Search from './Search'
import { connect } from 'react-redux';
import { searchFilmByNameThunk, searchFieldValue, } from '../../redux/reducers/searchPageReducer'
import PreloaderSecond from '../common/PreloaderSecond/PreloaderSecond'



class SearchContainer extends React.Component {
    componentDidMount() {

    }

    onFieldChange = (value) => {
        this.props.searchFieldValue(value)
    }
    searchMovie = (name) => {
        this.props.searchMovie(name)
    }

    render() {
        return (
            <>
            {(this.props.isFetching) ? <PreloaderSecond /> : <Search {...this.props} onFieldChange={this.onFieldChange} />}
                
            </>
        )

    }
}


const mapStateToProps = (state) => ({
    searchFieldText: state.searchPage.searchFieldValue,
    searchResult: state.searchPage.searchResult,
    isFetching: state.searchPage.isFetching,
})
const mapDispatchToProps = (dispatch) => {
    return {
        searchFilm: (name, page) => {
            dispatch(searchFilmByNameThunk(name, page))
        },
        searchFieldValue: (value) => {
            dispatch(searchFieldValue(value))
        },
        searchMovie: (name) => {
            dispatch(searchFilmByNameThunk(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);