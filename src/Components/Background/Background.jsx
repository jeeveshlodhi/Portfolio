import React from 'react'

const Background = ({text}) => {
    
    const backStyle = {
        fontFamily: 'Playfair Display SC',
        fontSize: '180px',
        fontWeight: '900',
        width:'100%',
        position:'fixed',
        bottom:'0',
        opacity:'10%',
        marginLeft: '-3%',
        zIndex: '0'
    }

    return (
        <div style={backStyle}>{text}</div>
    )
}

export default Background