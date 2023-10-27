import React from 'react'
import { usePagination } from '../../hooks/usePagination'

const MyPagination = ({totalPages, changePost, page}) => {
    let pagesArr = usePagination(totalPages)
    return (
    <div className='page__wrapper'>
			{pagesArr.map(p => <span
				key={p}
				className={p === page ? 'page__current page' : 'page'}
				onClick={() => changePost(p)}
			>{p}</span>)}
		</div>
  )
}

export default MyPagination