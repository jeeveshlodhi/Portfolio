import React from 'react'
import Background from '../../Components/Background/Background'
import Header from '../../Components/Header/Header'
import Social from '../../Components/Social/Social'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <div className='homeWrapper'>
        <Header/>
        <div className='main' style={{padding: '0rem 10rem'}}>
            <div className='name'>Contact Me</div>
            <div className='subheading'>Get in touch or shoot me an email directly on lodhijeevesh@gmail.com</div>
            <div className='inputWrapper'>
                <input type="text" placeholder='Name' className='input  ' />
                <input type="email" placeholder='Email' className='input' />
                <textarea type="textarea" placeholder='Message' className='input' rows="4" cols="50" />
                <input type="submit" value="Send Message" className='btn' />
            </div>
            <div className='link' style={{padding:'0rem 1rem'}}>
                <Link to='/'><p>Go Back to Home <span className='arrow'><HiArrowNarrowRight/></span></p></Link>
                <div className='margin'></div>
            </div>
        </div>
        <Background text={'Background'} />
        <Social/>
    </div>
  )
}

export default Contact