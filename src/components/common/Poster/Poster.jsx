import Styles from './Poster.module.css'
import { NavLink } from 'react-router-dom';
import imgNoPoster from '../../../assets/img/clapperBoard.jpg'



const Poster = (props) => {
    return (
        <NavLink to={`about/${props.result.id}`}>
            <div className={Styles.poster}>
                <div className={Styles.img}>
                    <img src={(props.result.poster_path != null) ? `https://image.tmdb.org/t/p/w300/${props.result.poster_path}` : imgNoPoster} alt="movie poster" />
                    <div className={Styles.rating}>
                        {props.result.vote_average}
                    </div>
                </div>
                <div className={Styles.title}>
                    {props.result.title}
                </div>
            </div>
        </NavLink>
    )
}

export default Poster;