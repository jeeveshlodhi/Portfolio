import React from 'react'
import Header from '../../Components/Header/Header'
import './Resume.css'
import resume from '../../assets/Dark Resume.jpg'
import Background from '../../Components/Background/Background'
import Social from '../../Components/Social/Social'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <div className='homeWrapper' style={{height: 'fit-content', overflowX:'hidden'}}>
        <Header/>
        <div className='main' style={{padding: '0rem 10rem', marginTop:'-3rem'}}>
            <div className='name'>Resume</div>
        </div>
        <div className='resume'>
            <img src={resume} alt=""  />
        </div>
        <div className='link' style={{margin: '0rem 10rem' }}>
            <Link to='/about'><p>See More About Me <span className='arrow'><HiArrowNarrowRight/></span></p></Link>
            <div className='margin'></div>
        </div>
        <Background text={'Resume'} />
        <Social/>
    </div>
  )
}

export default Resume
