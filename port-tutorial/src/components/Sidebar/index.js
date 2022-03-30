import './index.scss';
import React from 'react'
import {Link} from 'react-router-dom';
import logoS from '../../assets/images/logoS.png';
import logo_sub from '../../assets/images/logo_sub.png';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const index = () => {

    return (
        <div className='nav-bar'>
            <Link to='/' className='logo'>
                <img src={logoS} alt='logo'/>
                <img src={logo_sub} alt='logo_sub' className='sub-logo'/>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    className='about-link'
                    to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    className='contact-link'
                    to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='#'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='#'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default index