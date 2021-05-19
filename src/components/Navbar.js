import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar navbar-expanded-lg navbar-lgith bg-light'>
            <Link className='navbar-brand' to='/'>
                Pupster
            </Link>
            <div>
                <ul className='navbar-nav'>
                    <li>
                        <Link to='/' className={window.location.pathname === '/' || window.location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
                            About
                        </Link>
                        </li>
                        <li>
                        <Link to='/search' className={window.location.pathname === '/search' ? 'nav-link active' : 'nav-link'}>
                            Search
                        </Link>
                        </li>
                        <li>
                        <Link to='/discover' className={window.location.pathname === '/discover' ? 'nav-link active' : 'nav-link'}>
                            Discover
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
