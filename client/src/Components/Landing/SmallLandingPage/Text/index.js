import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../smallStyles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const SmallLandingText = ({classes}) => {

    return (
        <div>
            <div className={classes.landingPageText} style={{position: 'absolute'}}>
                <div align="center">
                    <Typography className={classes.smallInfoText}> We are a coffee catering company </Typography>
                        <div className={classes.buttonPadding}>
                            <Button component={Link} to="/GetAQuote" variant="outlined" className={classes.smallButton}>
                                <Typography  className ={classes.smallGetQuoteText}> GET A QUOTE </Typography>
                            </Button>
                        </div>
                    <Typography className={classes.smallInfoText}> Based in Oklahoma City, OK</Typography>
                </div>
            </div>
        </div> 
    )
}

SmallLandingText.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallLandingText);

