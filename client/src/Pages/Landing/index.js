import React from 'react'
import './landing.css'
import { Page, Footer} from '../../Components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import photo from '../../Assets/HeaderV2.jpg';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

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
    }
  });

const ResponsiveImage = ({ src, width, height, containerClass, imgClass }) => (
    <div className={containerClass} style={{width}} >
    <div style={{ paddingBottom:'55%' }} />
      <img
        src={src}
        className={imgClass}
      />
    </div>
);

const Landing = ({ history, classes }) => {
    return (
        <Page history={history}>
            <ResponsiveImage
                src={photo}
                width={100000}
                containerClass={classes.landingPhotoContainer}
                imgClass={classes.responsiveImg}
            />
    
            {/* <Footer /> */}
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
