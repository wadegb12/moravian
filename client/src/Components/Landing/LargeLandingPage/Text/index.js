import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../largeStyles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const LargeLandingText = ({ classes }) => {

    return (
        <div>
            <div className={classes.landingPageText} style={{position: 'absolute'}}>
                <div align="center">
                    <Typography className={classes.infoText}> We are a coffee catering company </Typography>
                    <div className={classes.buttonPadding}>
                        <Button component={Link} to="/GetAQuote" variant="outlined" className={classes.button}>
                            <Typography  className ={classes.getQuoteText}> GET A QUOTE </Typography>
                        </Button>
                    </div>
                    <Typography className={classes.infoText}> Based in Oklahoma City, OK</Typography>
                </div>
            </div>
        </div> 
    )
}

LargeLandingText.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LargeLandingText);

