import React from 'react'
import AnimatedLetters from '../AnimatedLetters/index'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={[
                            'A',
                            'b',
                            'o',
                            'u',
                            't',
                            ' ',
                            'm',
                            'e'
                        ]}
                        idx={15}/>
                    <p>
                        I'm very ambitious front-end developer looking for a role in established IT
                        company with the opportunity to work with the latest technologies on challenging
                        and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quietly confident, naturally curious, and perpetually working on improving
                        my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family person, father
                        of a beautiful daughter, a sports fanatic, photography enthusiast, and
                        tech-obsessed!!!
                    </p>
                </h1>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD0031'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#DD0031'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#DD0031'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#DD0031'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#DD0031'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About