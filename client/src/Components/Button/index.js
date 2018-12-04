import React from 'react'

import './button.css'
import MButton from '@material-ui/core/Button';

import green from '@material-ui/core/colors/green';

const Button = ({ title, onClick, children }) => {

    const click = e => {
        e.preventDefault();
        onClick()
    }

    return (<MButton title={title} mini variant="fab" aria-label="Add"  type="button" className="btn btn-success" style={{color:'white',backgroundColor:green[500]}} onClick={click}>
        {children}
    </MButton>
    )
}

export default Button;