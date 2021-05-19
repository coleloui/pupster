import React from 'react'

export default function SearchResults({ results }) {
    console.log(results)
    return (
        <ul className='list-group search-results'>
            {results.map((pup) => (
                <li key={pup} className='list-group-item'>
                    <img alt='dog' src={pup} className='img-fluid' />
                </li>
            ))}
        </ul>
    )
}
