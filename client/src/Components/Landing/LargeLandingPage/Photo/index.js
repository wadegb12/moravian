import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import desktopPhoto from '../../../../Assets/desktopLandingPhoto.png';
import Media from "react-media";
import styles from '../../largeStyles'

const LargeLandingPhoto = ({ classes }) => {

    return (
        <div>
            <Media query="(max-width: 1065px)">
                <div className={classes.smallImageContainer} >
                    <div className={classes.imageHolder} >
                        <img src={desktopPhoto} alt="" className={classes.image} /> 
                    </div>
                </div>
            </Media>  
            <Media query="(min-width: 1066px)">
                <div className={classes.imageContainer} >
                    <div className={classes.imageHolder} >
                        <img src={desktopPhoto} alt="" className={classes.image} /> 
                    </div>
                </div>
            </Media> 
        </div>
    )
}

LargeLandingPhoto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LargeLandingPhoto);


