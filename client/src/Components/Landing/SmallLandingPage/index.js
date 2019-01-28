import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import verticalLandingPagePhoto from '../../../Assets/smallLandingPhoto.png';
import styles from './styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const SmallLandingPage = ({ classes }) => {

    return (
        <div>
            <div className={classes.imageContainer} >
                <div className={classes.imageHolder} >
                    <img src={verticalLandingPagePhoto} alt="" className={classes.image} />
                </div>
            </div>
            <div className={classes.landingPageText} style={{position: 'absolute'}}>
                <div align="center">
                    <Typography className={classes.smallInfoText}> We are a coffee catering company </Typography>
                    <Button component={Link} to="/GetAQuote" variant="outlined" className={classes.smallButton}>
                        <Typography  className ={classes.smallGetQuoteText}> GET A QUOTE </Typography>
                    </Button>
                    <Typography className={classes.smallInfoText}> Based in Oklahoma City, OK</Typography>
                </div>
            </div>
        </div> 
    )
}

SmallLandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallLandingPage);
