import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import verticalLandingPagePhoto from '../../../../Assets/verticalLandingPagePhoto.jpg';
import Media from "react-media";
import styles from '../../smallStyles'

const SmallLandingPhoto = ({ classes }) => {

    return (
        <div>
            <Media query="(max-width: 521px)">
                <div className={classes.smallImageContainer} >
                    <div className={classes.imageHolder} >
                        <img src={verticalLandingPagePhoto} alt="" className={classes.image} />
                    </div>
                </div>
            </Media>
            <Media query="(min-width: 522px)"> 
                <div className={classes.imageContainer} >
                    <div className={classes.imageHolder} >
                        <img src={verticalLandingPagePhoto} alt="" className={classes.image} />
                    </div>
                </div>
            </Media>
        </div>
    )
}

SmallLandingPhoto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallLandingPhoto);
