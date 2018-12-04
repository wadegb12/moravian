import React from 'react'
import Body from '../Body';
import image from '../../Assets/comingSoon.svg'
import Typography from '@material-ui/core/Typography';

const ComingSoon = (props) => {
    return ( 
        <Body center>
                <img src={image} width="300" height="300"/>
                <Typography variant="headline" style={{color:'rgba(67,67,72,0.75)'}}> Coming Soon </Typography>
        </Body>
    )
}

export default ComingSoon