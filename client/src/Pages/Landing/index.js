import React from 'react'
import './landing.css'
import photo from '../../Assets/HeaderV2.jpg';
import { Page, ResponsiveImage} from '../../Components'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import pouringPhoto from '../../Assets/pouringCoffee.jpg';
import coffeeArt from '../../Assets/coffeeArt.jpg';
import Media from "react-media";

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
    container: {
        display: 'flex'
    },
    imageSize: {
        maxWidth: '100%',
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
            <Media query="(max-width: 599px)">
                <div styles={classes.container} align="center" >
                    <img src={pouringPhoto} className={classes.imageSize}/>
                    <img src={coffeeArt} className={classes.imageSize}/>
                </div>
            </Media>
            <Media query="(min-width: 599px)">
                <div styles={classes.container} align="center" >
                    <img src={pouringPhoto} className={classes.imageSize}/>
                    <img src={coffeeArt} className={classes.imageSize}/>
                </div>
            </Media>
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
