import styles from './Search.module.css'
import Poster from '../common/Poster/Poster'
// import imgSearch from '../../assets/img/search.svg'

const Search = (props) => {


    const onFieldChange = (event) => {
        let text = event.target.value
        props.onFieldChange(text)
    }
    const search = () => {
        if (props.searchFieldText === '') {

        } else {
            props.searchMovie(props.searchFieldText)
        }
    }

    let posters = props.searchResult.map((item) => {
        return <Poster result={item} key={item.id} />
    })



    return (
        <>
            <div className={styles.search}>
                <div className={styles.search__container}>
                    <div className={styles.search__elements}>
                        <input type='text' value={props.searchFieldText} onChange={onFieldChange} placeholder='Омерзительная восьмёрка' />
                        <svg onClick={search} className={styles.svg} viewBox="0 0 512 512" >
                            <path d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474
			c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323
			c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848
			S326.847,409.323,225.474,409.323z"/>
                            <path d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328
			c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"/>
                        </svg>
                    </div>
                    <div className='posters__row'>
                        {posters}
                    </div>
                </div>
            </div>



        </>
    )
}

export default Search;