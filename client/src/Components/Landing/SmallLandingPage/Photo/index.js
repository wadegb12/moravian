import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import verticalLandingPagePhoto from '../../../../Assets/verticalLandingPagePhoto.jpg';
import verticalLandingPagePhoto from '../../../../Assets/smallLandingPhoto.png';
import Media from "react-media";
import styles from '../../smallStyles'

const SmallLandingPhoto = ({ classes }) => {

    return (
        <div className={classes.imageContainer} >
            <div className={classes.imageHolder} >
                <img src={verticalLandingPagePhoto} alt="" className={classes.image} />
            </div>
        </div>
    )
}

SmallLandingPhoto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallLandingPhoto);
