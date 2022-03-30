import React from 'react'
import './index.scss'
import logoS from '../../assets/images/logoS.png'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import Logo from './Logo/index.js'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A', 'l', 'e', 'x', 'a', 'n', 'd', 'e', 'r']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'eL', 'e', 'r', '.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover') 
        }, 4000)
    }, []) 


    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br></br>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={logoS} alt='developer'/> 
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}  />
                    <br></br>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Fronted developer / JavaScript</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home