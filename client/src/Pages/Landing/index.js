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

const Landing = ({ history, classes, props }) => {
    // const { state } = props;

    return (
        <Page history={history}>
            <div className={styles.landingPhotoContainer}>
                <img src={photo} alt="" className={classes.responsiveImg} /> 
            </div>
        

            {/* <div align= "center"  className={classes.getAQuoteContainer} >
                <Typography className={classes.getAQuoteText}>
                    Get A Quote
                </Typography>
                <Typography className={classes.getAQuoteText}>
                    Based in Oklahoma City, OK
                </Typography>
            </div> */}
            
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
