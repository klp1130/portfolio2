import { useState } from 'react'
import { projects, skills, contact } from '../../portfolio'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import './Navbar.css'

const Navbar = () => {
    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav className='center nav'>
            <ul
                style={{ display: showNavList ? 'flex' : null }}
                className='nav__list'
            >   
                {projects.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#projects'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Projects
                        </a>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#skills'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            skills
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className='nav__list-item'>
                        <a
                            href='#contact'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            contact
                        </a>
                    </li>
                ) : null}
            </ul>

            <button
                type='button'
                onClick={toggleNavList}
                className='btn btn--icon nav__hamburger'
                >
                {showNavList ? <CloseIcon /> : <MenuIcon />}
            </button>
        </nav>
    )
}

export default Navbar