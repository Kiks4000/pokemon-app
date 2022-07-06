import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div className='btnContainer'>
            {gotoPrevPage && <button className='btn btnPrev' onClick={gotoPrevPage}>Prev</button>}
            {gotoNextPage && <button className='btn btnNext' onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
