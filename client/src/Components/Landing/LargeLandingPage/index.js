import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import coffeeOnTable from '../../../Assets/coffeeOnTable.jpg';
import Media from "react-media";
import styles from '../styles'

const LargeLandingPage = ({ history, classes, props }) => {

    return (
        <div>
            <Media query="(max-width: 1065px)">
                <div className={classes.smallImageContainer} >
                    <div className={classes.imageHolder} >
                        <img src={coffeeOnTable} alt="" className={classes.image} /> 
                    </div>
                </div>
            </Media>  
            <Media query="(min-width: 1066px)">
                <div className={classes.imageContainer} >
                    <div className={classes.imageHolder} >
                        <img src={coffeeOnTable} alt="" className={classes.image} /> 
                    </div>
                </div>
            </Media> 
        </div>
    )
}

LargeLandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LargeLandingPage);


