import React from 'react'
import CardBtn from './CardBtn'

export default function Card({ image, handleBtnClick }) {
    console.log(image);
    return (
        <div className='card' style={{backgroundImage: image ? `url(${image})` : 'none', height: '80vh'}}>
            {!image && <i className='fa fa-spinner fa-spin' aria-hidden="true" />}
            <CardBtn onClick={handleBtnClick} data-value='pick' />
            <CardBtn onClick={handleBtnClick} data-value='pass' />
        </div>
    )
}
