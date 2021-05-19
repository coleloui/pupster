import React from 'react'

export default function CardBtn(props) {
    return (
        <button onClick={props.onClick}
        className={`card-btn ${props['data-value']}`}
        data-value={props['data-value']}>{props['data-value']}</button>
    )
}
