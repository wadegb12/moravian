import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import desktopPhoto from '../../../Assets/desktopLandingPhoto.png';
import Media from "react-media";
import styles from './styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const LargeLandingPage = ({ classes }) => {

    return (
        <div>
            <div className={classes.smallImageContainer} >
                <div className={classes.imageHolder} >
                    <img src={desktopPhoto} alt="" className={classes.image} /> 
                </div>
            </div>

            <Media query="(max-width: 1100px)">
                <div className={classes.smallLandingPageText} style={{position: 'absolute'}}>
                    <div align="center">
                        <Typography className={classes.infoText}> We are a coffee catering company </Typography>
                        <Button component={Link} to="/GetAQuote" variant="outlined" className={classes.button}>
                            <Typography  className ={classes.getQuoteText}> GET A QUOTE </Typography>
                        </Button>
                        <Typography className={classes.infoText}> Based in Oklahoma City, OK</Typography>
                    </div>
                </div>
            </Media>
            <Media query="(min-width: 1101px)">
                <div className={classes.landingPageText} style={{position: 'absolute'}}>
                    <div align="center">
                        <Typography className={classes.infoText}> We are a coffee catering company </Typography>
                        <Button component={Link} to="/GetAQuote" variant="outlined" className={classes.button}>
                            <Typography  className ={classes.getQuoteText}> GET A QUOTE </Typography>
                        </Button>
                        <Typography className={classes.infoText}> Based in Oklahoma City, OK</Typography>
                    </div>
                </div>
            </Media>
        </div>
    )
}

LargeLandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LargeLandingPage);


