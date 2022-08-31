import React from 'react'
import Header from '../../Components/Header/Header'
import './Project.css'
import pro1 from '../../assets/pro1.gif'
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.png'
import pro4 from '../../assets/pro4.gif'
import pro5 from '../../assets/pro5.png'
import pro6 from '../../assets/pro6.png'
import pro7 from '../../assets/pro7.png'
import pro8 from '../../assets/pro8.gif'
import pro9 from '../../assets/pro9.png'
import pro10 from '../../assets/pro10.png'
import pro11 from '../../assets/pro11.png'
import pro12 from '../../assets/pro12.png'

const ProjectData = [
    {
        name : 'Project1',
        img: pro1
    },
    {
        name : 'Project2',
        img: pro2
    },
    {
        name : 'Project3',
        img: pro3
    },
    {
        name : 'Project4',
        img: pro4
    },
    {
        name : 'Project5',
        img: pro5
    },
    {
        name : 'Project6',
        img: pro6
    },
    {
        name : 'Project7',
        img: pro7
    },
    {
        name : 'Project8',
        img: pro8
    },
    {
        name : 'Project9',
        img: pro9
    },
    {
        name : 'Project10',
        img: pro10
    },
    {
        name : 'Project11',
        img: pro11
    },
    {
        name : 'Project12',
        img: pro12
    },
]

const Project = () => {
  return (
    <div className='homeWrapper'>
        <Header/>
        <div className='main' style={{padding:'0rem 10rem'}}>
            <div className='name'>Projects.</div>
            <div className='projectWrapper'>
                <div className='optionWrapper'>
                    <div className='option'>All</div>
                    <div>Projects</div>
                    <div>Open Source</div>
                    <div>Dev Tools</div>
                    <div>Designs</div>
                </div>
                <div className='projectCardWrapper'>
                    {
                        ProjectData.map((data, idx)=>{
                            return(
                                <div role='gridcell' id='idx' className='card' tabIndex={0} style={{padding: '10rem 2rem'}}>
                                    <img src={data.img} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Project