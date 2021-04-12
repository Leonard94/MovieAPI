import style from './Pagination.module.css'



const Pagintaion = (props) => {

    let prevPage = props.currentPage - 1
    let nextPage = props.currentPage + 1

    return (
        <div className={style.pagination}>
            <div className={style.pagination__container}>
                <div className={style.pagination__row}>
                    
                    {(props.currentPage !== 1) ? <div className={style.arrowPrev} onClick={() => props.onPageChange(prevPage)}></div> : null}

                    <div className={style.currentPage}>
                        {props.currentPage}
                    </div>

                    <div className={style.arrowNext} onClick={() => props.onPageChange(nextPage)}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagintaion;