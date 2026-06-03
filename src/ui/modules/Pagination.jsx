import styles from "./Pagination.module.css"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({page,setPage}) => {
   
    const prevHandler = () => {
        if (page <= 1) return
        setPage((page) => page - 1)
    }
    const nextHandler = () => {
        if (page >= 10) return
        setPage((page) => page + 1)
    }


    return (
        <div className={styles.pagination}>
            <button onClick={prevHandler} className={page===1 ? styles.disabled : ""}>
                <FaChevronLeft></FaChevronLeft>
            </button>
            <p className={page===1 ? styles.selected : ""}>1</p>
            
            {page > 1 && page < 10 && (<>
                <span>...</span>
                <p className={styles.selected}>{page}</p>
            </>)}
            <span>...</span>

            <p className={page===10 ? styles.selected : ""}>10</p>

            <button onClick={nextHandler} className={page===10 ? styles.disabled :""}>
                <FaChevronRight></FaChevronRight>
            </button>
        </div>
    )
}

export default Pagination
