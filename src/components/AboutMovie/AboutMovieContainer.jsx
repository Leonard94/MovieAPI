import AboutMovie from './AboutMovie'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import React from 'react'
import { getAboutMovieThunkCreator } from '../../redux/reducers/aboutFilmReducer'
import PreloaderSecond from '../common/PreloaderSecond/PreloaderSecond'
import {saveTheMovieThunkCreator} from '../../redux/reducers/savedFilmReducer'

class AboutMovieContainer extends React.Component {
    componentDidMount() {
        this.props.getAboutMovie(this.props.match.params.id)
    }

    render() {
        if (this.props.aboutFilmPage === null) {
            return <PreloaderSecond />
        }
        return (
            <>
                <AboutMovie aboutFilmPage={this.props.aboutFilmPage} followingInProgress={this.props.followingInProgress} saveTheMovie={this.props.saveTheMovie} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    aboutFilmPage: state.aboutFilmPage.aboutMovie,
    isFetching: state.aboutFilmPage.isFetching,
    followingInProgress: state.savedFilmPage.followingInProgress,
})

const mapDispatchToProps = (dispatch) => ({
    getAboutMovie: (id) => {
        dispatch(getAboutMovieThunkCreator(id))
    },
    saveTheMovie: (id) => {
        dispatch(saveTheMovieThunkCreator(id))
    }
})



let withUrlDataAboutMovieContainer = withRouter(AboutMovieContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataAboutMovieContainer)




