import React from 'react'
import './landing.css'
import photo from '../../Assets/HeaderV2.jpg';
import { Page, ResponsiveImage} from '../../Components'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import pouringPhoto from '../../Assets/pouringCoffee.jpg';
import coffeeArtPhoto from '../../Assets/coffeeArt.jpg';
import Media from "react-media";
import { Typography } from '@material-ui/core';

const styles = theme => ({
    responsiveImg: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%'
    },
    landingPhotoContainer: {
        position: 'relative',
        maxWidth: '100%',
        maxHeight: '100vh'
    },
    smallScreenImageSize: {
        maxWidth: '100%',
    },
    imageSize: {
        maxWidth: '50%',
    },
    getAQuoteContainer: {
        background: "#323031",
        padding: '32px'
    },
    getAQuoteText: {
        font: "verlag",
        fontSize: "32",
        color: "#ffffff"
    }
  });

const Landing = ({ history, classes }) => {
    return (
        <Page history={history}>
            
            <ResponsiveImage
                src={photo}
                width={100000}
                paddingBottom={55}
                containerClass={classes.landingPhotoContainer}
                imgClass={classes.responsiveImg}
            />
            <div align= "center"  className={classes.getAQuoteContainer} >
                <Typography className={classes.getAQuoteText}>
                    Get A Quote
                </Typography>
                <Typography className={classes.getAQuoteText}>
                    Based in Oklahoma City, OK
                </Typography>
            </div>
            <Media query="(max-width: 600px)">
                <div align="center" >
                    <img src={pouringPhoto} className={classes.smallScreenImageSize}/>
                    <img src={coffeeArtPhoto} className={classes.smallScreenImageSize}/>
                </div>
            </Media>
            <Media query="(min-width: 600px)">
                <div  align="center" >
                    <img src={pouringPhoto} className={classes.imageSize}/>
                    <img src={coffeeArtPhoto} className={classes.imageSize}/>
                </div>
            </Media>
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
