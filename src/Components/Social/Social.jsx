import React from 'react'
import { RiGithubLine, RiTwitterLine } from 'react-icons/ri'
import { GrInstagram } from 'react-icons/gr'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Social = () => {
    const socialColumn = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        flexDirection: 'column',
        alignItems:'center'
    }
    const socialWrapper = {
        display:'flex',
        justifyContent:'flex-end',
        padding: '0rem 4rem',
        height: '400px',
        marginTop: '-200px',
        fontSize: '20px ',
        position: 'fixed',
        width:'90%',
        zIndex: '1'
    }
    const vertical = {

        borderRight: '2px solid white',
        height:'20vh',
        
    }
    return (
        <div style={socialWrapper}>
            <div style={socialColumn}>
                <a href='https://github.com/jeeveshlodhi'  rel="noreferrer"  target='_blank' ><RiGithubLine/></a>
                <a href='https://www.instagram.com/jeeveshlodhi/'  rel="noreferrer" target='_blank'><GrInstagram/></a>
                <a href='https://twitter.com/jeevesh_lodhi'  rel="noreferrer" target='_blank'><RiTwitterLine/></a>
                <a href='https://www.linkedin.com/in/jeeveshlodhi/'  rel="noreferrer" target='_blank'><FaLinkedinIn/></a>
                <a href="mailto:lodhijeevesh@gmail.com"  rel="noreferrer"><HiOutlineMail/> </a> 
                <div style={vertical}></div>
            </div>
        </div>
    )
}

export default Social