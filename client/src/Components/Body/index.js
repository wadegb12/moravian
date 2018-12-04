import React from 'react'

import "./body.css"



const Body = (props) => {

    const {
        children, center,bgc
    } = props

    

    var style={}

    if(center){
        const {centerm} = cstyles
        style=centerm
    }

    if(bgc){
        style={...style, backgroundColor:bgc}
    }

    return (
        <div className="Body" style={style}>
            {children}
        </div>
    )
}

const cstyles = {
    centerm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'start'
    },

}

export default Body;