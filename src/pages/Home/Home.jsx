import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-router-dom'
import Background from '../../Components/Background/Background'
import Social from '../../Components/Social/Social'

const Home = () => {
  return (
    <div className="homeWrapper">
        <Header/>
        <div className='main'>
            <div className='intro'>
                Hi, my name is
            </div>
            <div className='name'>
                Jeevesh Lodhi
            </div>
            <div className='subHeading'>
                I am a Frontend Developer, IOT enthusiast, practicing minimalist design.
            </div>
            <div className='link'>
                <Link to='/about'><p>See More About Me <span className='arrow'><HiArrowNarrowRight/></span></p></Link>
                <div className='margin'></div>
            </div>
        </div>
        <Background text = {'Hello, There'} />
        <Social/>
    </div>
  )
}

export default Home