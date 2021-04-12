import styles from './Top.module.css'
import Poster from '../common/Poster/Poster'


const Top = (props) => {

    let posters = props.result.map((item) => {
        return (
            <Poster result={item} key={item.id} />
        )
    })


    return (
        <>
            <div className={styles.top}>
                <div className={styles.top__container}>
                    <div className='posters__row'>
                        {posters}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top;