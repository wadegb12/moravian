import React from 'react'
import { Page } from '../../Components'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Media from "react-media";
import styles from './styles'
import SmallLandingPage from '../../Components/Landing/SmallLandingPage';
import LargeLandingPage from '../../Components/Landing/LargeLandingPage';

const Landing = ({ history, classes, props }) => {

    return (
        <Page history={history}>
            <Media query="(max-width: 805px)"> 
                <SmallLandingPage/>
            </Media>
            <Media query="(min-width: 806px) ">
                <LargeLandingPage/>
            </Media>  
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);

{/* <Media query="(max-width: 769px)">
                <div>
                    <img src={verticalLandingPagePhoto} alt="" className={classes.vertialImg} /> 
                    <div align="center" className={classes.background}>
                        <img src={pouringPhoto} alt="" className={classes.image}/>
                        <img src={coffeeArtPhoto} alt="" className={classes.image}/>
                    </div>
                </div>
            </Media>
            <Media query="(min-width: 770px)">
                <div>
                    <img src={coffeeOnTable} alt="" className={classes.responsiveImg} /> 
                    <div className={classes.flex}>
                        <div className={classes.largeImageContainer}>
                            <img src={pouringPhoto} alt="" className={classes.image}/>
                        </div>
                        <div className={classes.largeImageContainer}>
                            <img src={coffeeArtPhoto} alt="" className={classes.image}/>
                        </div>
                    </div>
                </div>
            </Media>  */}






{/* <Media query="(max-width: 499px)">
                <div align="center" className={classes.background}>
                    <Typography className={classes.infoText}> We are a coffee catering company </Typography>
                    <div className={classes.buttonPadding}>
                        <Button component={Link} to="/GetAQuote" variant="outlined" className={classes.button}>
                            <Typography  className ={classes.getQuoteText}> GET A QUOTE </Typography>
                        </Button>
                    </div>
                    <Typography className={classes.infoText}> Based in Oklahoma City, OK</Typography>
                </div>
            </Media> */}

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

            {/* <Media query="(min-width: 850px)">
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
            </Media> */}