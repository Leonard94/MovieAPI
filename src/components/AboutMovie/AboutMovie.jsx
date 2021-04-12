import styles from './AboutMovie.module.css'


const AboutMovie = (props) => {

    let genres = props.aboutFilmPage.genres.map((item, index) => {
        return <div className={styles.genre} key={index}>{item.name}</div>
    })
    let releaseDate = props.aboutFilmPage.release_date.split('-').reverse().join('.')


    return (
        <div className={styles.movie}>
            <div className={styles.movie__container}>
                <div className={styles.img}>
                    <img src={`https://image.tmdb.org/t/p/w400/${props.aboutFilmPage.poster_path}`} alt={`poster ${props.aboutFilmPage.title}`} />
                </div>
                <div className={styles.about}>

                    {/* Название */}
                    <div className={styles.title}>
                        {props.aboutFilmPage.title}
                    </div>

                    {/* Жанры */}
                    {genres}

                    {/* Дата выхода */}
                    <div className={styles.info}>
                        <span>Дата выхода:</span> {releaseDate}
                    </div>

                    {/* Продолжительность */}
                    <div className={styles.info}>
                        <span>Продолжительность:</span> {props.aboutFilmPage.runtime} мин
                    </div>

                    {/* Рейтинг */}
                    <div className={styles.rating}>
                        {props.aboutFilmPage.vote_average}
                    </div>
                    <span>Рейтинг фильма</span>

                    {/* Описание */}
                    <div className={styles.description}>
                        {props.aboutFilmPage.overview}
                    </div>

                    <button onClick={() => { props.saveTheMovie(props.aboutFilmPage.id) }} disabled={props.followingInProgress}>
                        Добавить в избранное
                    </button>

                </div>

            </div>

        </div>
    )
}

export default AboutMovie;