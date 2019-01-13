import React from 'react'
import { Page } from '../../Components'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Media from "react-media";
import styles from './styles'
import SmallLandingPage from '../../Components/Landing/SmallLandingPage';
import LargeLandingPage from '../../Components/Landing/LargeLandingPage';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Landing = ({ history, classes, props }) => {

    return (
        <Page history={history}>
            <div >
                <Media query="(max-width: 805px)"> 
                    <div>
                        <SmallLandingPage/>
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
                </Media>
                <Media query="(min-width: 806px) ">
                    <div>
                        <LargeLandingPage/>
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
                </Media> 
            </div>
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);

