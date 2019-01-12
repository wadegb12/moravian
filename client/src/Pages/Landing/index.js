import React from 'react'
import './landing.css'
import photo from '../../Assets/HeaderV2.jpg';
import { Page } from '../../Components'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import pouringPhoto from '../../Assets/pouringCoffee.jpg';
import coffeeArtPhoto from '../../Assets/coffeeArt.jpg';
import Media from "react-media";
import styles from './styles'
import { Typography } from '@material-ui/core';

const Landing = ({ history, classes, props }) => {

    return (
        <Page history={history}>
            <img src={photo} alt="" className={classes.responsiveImg} /> 
                <div className={classes.quoteTextContainer}>
                    <Typography align="center" >
                        LET US GIVE YOU A QUOTE
                    </Typography>
                </div>
            
            <Media query="(max-width: 769px)">
                <div align="center" className={classes.background}>
                    <img src={pouringPhoto} alt="" className={classes.image}/>
                    <img src={coffeeArtPhoto} alt="" className={classes.image}/>
                </div>
            </Media>
            <Media query="(min-width: 770px)">
                <div className={classes.flex}>
                    <div className={classes.largeImageContainer}>
                        <img src={pouringPhoto} alt="" className={classes.image}/>
                    </div>
                    <div className={classes.largeImageContainer}>
                        <img src={coffeeArtPhoto} alt="" className={classes.image}/>
                    </div>
                </div>
                
            </Media>
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
