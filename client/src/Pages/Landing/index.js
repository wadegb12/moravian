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
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Landing = ({ history, classes, props }) => {

    return (
        <Page history={history}>
            <Media query="(max-width: 499px)">
                <div align="center" className={classes.background}>
                    <Typography className={classes.infoText}> We are a coffee catering company </Typography>
                    <div className={classes.buttonPadding}>
                        <Button component={Link} to="/GetAQuote" variant="outlined" className={classes.button}>
                            <Typography  className ={classes.getQuoteText}> GET A QUOTE </Typography>
                        </Button>
                    </div>
                    <Typography className={classes.infoText}> Based in Oklahoma City, OK</Typography>
                </div>
            </Media>

            <img src={photo} alt="" className={classes.responsiveImg} /> 

            {/* <Media query="(min-width: 500px)">
                <div align="center">
                    <div  className={classes.quoteTextContainer}>
                        <Typography className={classes.infoText}> We are a coffee catering company </Typography>
                        <div className={classes.buttonPadding}>
                            <Button component={Link} to="/GetAQuote" variant="outlined" className={classes.button}>
                                <Typography  className ={classes.getQuoteText}> GET A QUOTE </Typography>
                            </Button>
                        </div>
                        <Typography className={classes.infoText}> Based in Oklahoma City, OK</Typography>
                    </div>
                </div>
            </Media> */}

            <Media query="(min-width: 850px)">
                <div align="center">
                    <div  className={classes.quoteTextContainer}>
                        <Typography className={classes.coffeeShopText}> We are a coffee catering company </Typography>
                        <div className={classes.buttonPadding}>
                            <Button component={Link} to="/GetAQuote" variant="outlined" className={classes.button}>
                                <Typography  className ={classes.getQuoteText}> GET A QUOTE </Typography>
                            </Button>
                        </div>
                        <Typography className={classes.basedText}> Based in Oklahoma City, OK</Typography>
                    </div>
                </div>
            </Media>

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
