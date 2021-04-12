import React from 'react'
import styles from './Saved.module.css'
import { connect } from 'react-redux'
import Poster from '../common/Poster/Poster'

const Saved = (props) => {

    let savedFilms = props.savedMovie.map((item) => {
        return <Poster result={item} key={item.id} />
    })


    return (
        <div className={styles.saved}>
            <div className={styles.saved__container}>
                <div className='posters__row'>
                    {(props.savedMovie.length === 0) ? <div> Вы ещё не сохранили ни одного фильма. </div> : savedFilms}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        savedMovie: state.savedFilmPage.savedMovie
    }
)

export default connect(mapStateToProps)(Saved)