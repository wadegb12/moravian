import React from 'react'
import './landing.css'
import { Page, Footer} from '../../Components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import photo from '../../Assets/Header.jpg';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
})



const Landing = (props) => {
    const { history } = props
    return (
        <Page history={history}>
            <div style={{ textAlign:"center"}}> 
                <Typography style={{ fontSize: 40, padding: 10}}> 
                        Let us 
                        <Button variant="outlined" color="primary">
                            cater
                        </Button>
                        your event 
                    <Typography style={{ fontSize: 20, padding: 10}}> 
                         Oklahoma City, OK
                    </Typography>
                </Typography>
                
                <img src={photo} width="100%" height="50%" />
            </div>
            <Footer />
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);





