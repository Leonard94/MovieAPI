import React from 'react'
import { connect } from 'react-redux';
import Top from './Top'
import PreloaderSecond from '../common/PreloaderSecond/PreloaderSecond'
import { getMovieTopThunkCreator, setNewCurrentPage } from '../../redux/reducers/topPageReducer'
import Pagination from '../common/Pagination/Pagination'



class TopContainer extends React.Component {

    componentDidMount() {

        this.props.getMovieTop(this.props.currentPage)
        // movieAPI.getTopMovie().then(response => {
        //     this.props.getMovieTop(response.data.results)
        // })
    }

    onPageChange = (page) => {
        this.props.setNewCurrentPage(page)
        this.props.getMovieTop(page)
    }



    // {this.props.isFetching ? <PreloaderSecond /> : <Top result={this.props.topMoviesList} />}

    render() {
        if (this.props.topMoviesList === null || this.props.isFetching === true) return <PreloaderSecond />
        return (
            <>
                <Top result={this.props.topMoviesList}  />
                <Pagination onPageChange={this.onPageChange} currentPage={this.props.currentPage} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    topMoviesList: state.topPage.topMoviesList,
    isFetching: state.topPage.isFetching,
    currentPage: state.topPage.currentPage,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieTop: (topMoviesList) => {
            dispatch(getMovieTopThunkCreator(topMoviesList))
        },
        setNewCurrentPage: (setNewPage) => {
            dispatch(setNewCurrentPage(setNewPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopContainer);